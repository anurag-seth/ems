import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthguardService } from './services/authguard.service';
import { LoginguardService } from './services/loginguard.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PersonalDetailsComponent } from './employee-details/personal-details/personal-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent, canActivate:[LoginguardService]},
  {path:'home-page', component:HomePageComponent,canActivate:[AuthguardService], children:[
    {path:'personal-details', component:PersonalDetailsComponent},
    {path:'employee-list', component:EmployeeListComponent},
    {path:'employee-details/:id', component:EmployeeDetailsComponent},
    {path:'add-employee', component: AddEmployeeComponent}
  ]},
  // {path:'personal-details', component:EmployeeDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
