import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing-module';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ClientDashboardComponent
  ]
})
export class ClientModule { }
