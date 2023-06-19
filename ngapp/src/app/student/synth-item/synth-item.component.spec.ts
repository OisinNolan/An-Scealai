import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SynthItemComponent } from './synth-item.component';
import { SynthItem } from '../../core/models/synth-item';
import { SynthesisService } from '../../core/services/synthesis.service';

describe('SynthItemComponent', () => {
  let component: SynthItemComponent;
  let fixture: ComponentFixture<SynthItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [ SynthesisService ],
      declarations: [ SynthItemComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render when @Input synthItem is defined', () => {
    expect(fixture.debugElement.query(By.css('.left'))).toBeTruthy();
    component.synthItem = new SynthItem('dia duit',undefined,TestBed.inject(SynthesisService));
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.right'))).toBeTruthy();
  });

  afterEach(()=>{
    fixture = null;
    component = null;
  });
});
