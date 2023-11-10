import { Component, OnInit } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { UserService } from "../../core/services/user.service";
import { StoryService } from "app/core/services/story.service";
import { ClassroomService } from "app/core/services/classroom.service";
import { ProfileService } from "app/core/services/profile.service";
import { Chart } from 'chart.js/auto';
import { ChoroplethChart } from 'chartjs-chart-geo';
import * as ChartGeo from 'chartjs-chart-geo'
import { COUNTY_NAMES } from './countyNames'
import config from 'abairconfig';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from "app/core/services/translation.service";
import { FeedbackCommentService } from "app/core/services/feedback-comment.service";

type UserStats = {
  total: number,
  activeStudents: number,
  pendingStudents: number,
  totalStudents: number,
  activeTeachers: number,
  pendingTeachers: number,
  totalTeachers: number,
}

type StoryStats = {
  totalStories: number,
  totalWords: number,
  avgWordCount: number,
  totalRecordings: number,
  totalFeedback: number,
  onlyTextFeedback: number,
  onlyAudioFeedback: number,
  bothAudioAndText: number,
  totalFeedbackWords: number,
  avgFeedbackWordCount: number,
  hasComments: number,
  createdWithPrompts: boolean
}

type FeedbackStats = {
  feedbackCommentsJustAudio: number,
  feedbackCommentsJustText: number,
  feedbackCommentsWithTextAndAudio: number,
  totalFeedbackComments: number,
}

@Component({
  selector: "app-database-stats",
  templateUrl: "./database-stats.component.html",
  styleUrls: ["./database-stats.component.scss"],
})
export class DatabaseStatsComponent implements OnInit {
  userChart: Chart;
  pieChart: Chart;
  countyChart: ChoroplethChart;
  pieChartLegendItems: any[] = [];

  userCounts: UserStats;
  storyStats: StoryStats;
  feedbackStats: FeedbackStats;
  grammarErrorCounts: any;
  profileCountyCounts: any;

  totalClassrooms: number = 0;
  avgNumStudentsInClass: number = 0;
  profileFilledPercentage: number = 0;
  studentsWithStoriesPercentage: number = 0;
  teachersWithClassroomsPercentage: number = 0;
  englishPercentage: number = 0;
  irishPercentage: number = 0;

  dataLoaded: boolean = false;

  constructor(private userService: UserService, private storyService: StoryService,
              private classroomService: ClassroomService, private profileService: ProfileService,
              private http: HttpClient, public ts: TranslationService, private feedbackCommentService: FeedbackCommentService) {}

  async ngOnInit() {
    // get stats for users, stories, grammar errors, and classroom data
    this.userCounts = await firstValueFrom(this.userService.getUserCountAndStatus());
    this.storyStats = await firstValueFrom<StoryStats>(this.storyService.getStoryStats());
    //this.grammarErrorCounts = await firstValueFrom(this.http.get(`${config.baseurl}gramadoir/getUserGrammarCounts`));
    this.profileCountyCounts = await firstValueFrom(this.profileService.getCountyCounts());

    this.totalClassrooms = await firstValueFrom(this.classroomService.getTotalClassrooms());
    this.avgNumStudentsInClass = await firstValueFrom(this.classroomService.getAvgNumStudents());
    
    // get percentages of profile and story information
    const numProfiles = await firstValueFrom(this.profileService.getNumOfProfiles());
    this.profileFilledPercentage = numProfiles / this.userCounts.total;
    
    const studentsWithStories = await firstValueFrom(this.userService.countUsersWithStories());
    this.studentsWithStoriesPercentage = studentsWithStories / this.userCounts.totalStudents;
    
    const teachersWithClassrooms = await firstValueFrom(this.userService.countTeachersWithClassrooms());
    this.teachersWithClassroomsPercentage = teachersWithClassrooms / this.userCounts.totalTeachers;
    
    const languageCounts = await firstValueFrom(this.userService.getLanguageCount());
    this.englishPercentage = languageCounts.englishCount / this.userCounts.total;
    this.irishPercentage = languageCounts.irishCount / this.userCounts.total;

    this.feedbackStats = await firstValueFrom(this.feedbackCommentService.getFeedbackStats());
    
    this.dataLoaded = true;

    // make charts
    await this.makeUserCountGraph();
    //await this.makeGrammarGraph();
    await this.makeCountyMap();
  }

  /* Create a bar chart of user types and number of active/pending users */
  async makeUserCountGraph() {
    const canvasElem = document.getElementById("user-counts") as HTMLCanvasElement;
    const ctx = canvasElem.getContext("2d");

    const labels = ["Students", "Teachers"];
    const data = {
      labels: labels,
      datasets: [  // one dataset for each user status: Active, Pending, Other
        {
          label: "Active",
          data: [this.userCounts.activeStudents, this.userCounts.activeTeachers],
          backgroundColor: "green",
        },
        {
          label: "Pending",
          data: [this.userCounts.pendingStudents, this.userCounts.pendingTeachers],
          backgroundColor: "yellow",
        },
        {
          label: "Not specified",
          data: [this.userCounts.totalStudents - (this.userCounts.activeStudents + this.userCounts.pendingStudents),
                 this.userCounts.totalTeachers - (this.userCounts.activeTeachers + this.userCounts.pendingTeachers)],
          backgroundColor: "red",
        },
      ],
    };

    this.userChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Stacked bar chart",
          },
        },
        responsive: true,
      },
    });
  }

  /* Make a pie chart of grammar error counts for the entire DB */
  async makeGrammarGraph() {
    const canvasElem = document.getElementById("grammar-pie-chart") as HTMLCanvasElement;
    const ctx = canvasElem.getContext('2d');
    if (this.pieChart) { this.pieChart.destroy(); } 
    this.pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(this.grammarErrorCounts),
            datasets: [{
                label: 'Grammar Error Counts ',
                data: Object.values(this.grammarErrorCounts),
                // TODO: replace these colours with correct gramadoir error colour-coding
                backgroundColor: Object.keys(this.grammarErrorCounts).map(_ => `#${((Math.random() * 0xffffff) << 0).toString(16)}`),
            }]
        },
        options: {
          plugins: {
            legend: {
              display: false,
            }

          }
        },
    });

    this.pieChartLegendItems = this.pieChart['legend']['legendItems'];
  }

  /* Create a map of Irish counties with the number of users from each county */
  async makeCountyMap() {
    // get topo json data of Irish counties
    const irl = await fetch('https://raw.githubusercontent.com/gist/carsonfarmer/9791524/raw/b27ca0d78d46a84664fe7ef709eed4f7621f7a25/irish-counties.topojson').then((r) => r.json());
    const counties = ChartGeo.topojson.feature(irl, irl.objects.counties)['features'];
    // label for each county on map generated from the county name in json data (stored as 'id')
    const mapLabels = counties.map((county) => county.id);

    // county name from profile data has to match the name in json data for value to be displayed correctly on the map
    // e.g. profile data -> json data: 'Contae Átha Cliath' -> 'Dublin'
    // the data for the chart is of the form: {feature: (json data), value: user count for given county}
    const mapData = counties.map((county) => ({ feature: county, value: this.profileCountyCounts[COUNTY_NAMES[county.id]] }))

    const canvasElem = document.getElementById("county-chart") as HTMLCanvasElement;
    this.countyChart = new ChoroplethChart(canvasElem.getContext("2d"), {
      data: {
        labels: mapLabels,
        datasets: [{
          label: 'Counties',
          outline: counties, // outline of Ireland
          showOutline: true,
          data: mapData, // each county with associate user count
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          projection: {
            axis: 'x',
            projection: 'equalEarth'
          }
        }
      }
    });
  }
}
