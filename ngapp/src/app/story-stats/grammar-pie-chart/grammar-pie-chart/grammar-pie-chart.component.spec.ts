import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarPieChartComponent } from './grammar-pie-chart.component';

describe('GrammarPieChartComponent', () => {
  let component: GrammarPieChartComponent;
  let fixture: ComponentFixture<GrammarPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammarPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
