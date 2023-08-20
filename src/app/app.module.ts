import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SessionComponent } from './components/session/session.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { NavBar2Component } from './components/nav-bar2/nav-bar2.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexchartComponent } from './components/apexchart/apexchart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    SessionComponent,
    ChartComponent,
    SidebarComponent,
    TransactionsTableComponent,
    NavBar2Component,
    ApexchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
