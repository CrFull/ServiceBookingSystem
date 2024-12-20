import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing-module';
import { CompanyComponent } from './company.component';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';

@NgModule({
  declarations: [
    CompanyComponent 
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    CompanyDashboardComponent 
  ]
})
export class CompanyModule { }
