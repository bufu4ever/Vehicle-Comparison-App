import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { VehicleComparisonComponent } from './pages/vehicle-comparison/vehicle-comparison.component';
import { ViewCarsComponent } from './pages/view-cars/view-cars.component';

const routes: Routes = [
  { path: 'vehicle-comparison', component: VehicleComparisonComponent },
  { path: 'view-cars', component: ViewCarsComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '',redirectTo:'/view-cars',pathMatch:'full'},
  { path: '',redirectTo:'/vehicle-comparison',pathMatch:'full'},
  { path:'',redirectTo:'/login',pathMatch:'full'},
  { path:'',redirectTo:'/admin',pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
