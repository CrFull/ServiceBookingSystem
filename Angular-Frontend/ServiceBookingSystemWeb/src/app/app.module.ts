import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';  
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  
  { path: '', component: AppComponent },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
