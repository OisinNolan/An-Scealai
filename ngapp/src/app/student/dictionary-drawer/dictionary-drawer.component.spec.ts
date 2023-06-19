import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DictionaryDrawerComponent } from './dictionary-drawer.component';

describe('DictionaryDrawerComponent', () => {
  let component: DictionaryDrawerComponent;
  let fixture: ComponentFixture<DictionaryDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DictionaryDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictionaryDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
