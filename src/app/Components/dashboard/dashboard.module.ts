import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModuleModule } from 'src/app/Shared/shared-module/shared-module.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { TopnavModule } from '../topnav/topnav.module';

@NgModule({
  declarations: [
    DashboardComponent  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModuleModule,
    TopnavModule,
    SidenavModule
  ]
})
export class DashboardModule { 
}
