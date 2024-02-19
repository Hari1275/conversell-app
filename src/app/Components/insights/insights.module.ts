import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsComponent } from './insights.component';
import { SharedModuleModule } from 'src/app/Shared/shared-module/shared-module.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { TopnavModule } from '../topnav/topnav.module';
@NgModule({
  declarations: [
    InsightsComponent
  ],
  imports: [
    CommonModule,
    InsightsRoutingModule,
    SharedModuleModule,
    TopnavModule,
    SidenavModule
  ],
  exports:[InsightsModule]
})
export class InsightsModule { }
