import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { DecimalPipe } from '@angular/common';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { ImportDataComponent } from './components/import-data/import-data.component';
import { CompanyChartComponent } from './components/company-chart/company-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    ForgetPassComponent,
    SignUpComponent,
    CompanySearchComponent,
    UpdateProfileComponent,
    CreateCompanyComponent,
    ImportDataComponent,
    CompanyChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
