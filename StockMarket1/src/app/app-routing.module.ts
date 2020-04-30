import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {ForgetPassComponent} from './components/forget-pass/forget-pass.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {CompanySearchComponent} from './components/company-search/company-search.component';
import {CreateCompanyComponent} from './components/create-company/create-company.component';
import {LoginGuard} from './guard/login-guard';
import {ImportDataComponent} from './components/import-data/import-data.component';
import {UpdateProfileComponent} from './components/update-profile/update-profile.component';
import {CompanyChartComponent} from './components/company-chart/company-chart.component';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'forget-pass', component: ForgetPassComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'company-search', component: CompanySearchComponent, canActivate: [LoginGuard] },
  { path: 'create-company', component: CreateCompanyComponent, canActivate: [LoginGuard] },
  { path: 'import-data', component: ImportDataComponent, canActivate: [LoginGuard] },
  { path: 'update-profile', component: UpdateProfileComponent, canActivate: [LoginGuard] },
  { path: 'company-chart', component: CompanyChartComponent, canActivate: [LoginGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
