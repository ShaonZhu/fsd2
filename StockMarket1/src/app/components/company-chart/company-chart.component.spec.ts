import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CompanyChartComponent } from './company-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('CompanyChartComponent', () => {
  let component: CompanyChartComponent;
  let fixture: ComponentFixture<CompanyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyChartComponent ],
      imports: [NgbModule, AppRoutingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
