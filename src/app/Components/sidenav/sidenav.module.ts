import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav.component';
import { SharedModuleModule } from 'src/app/Shared/shared-module/shared-module.module';
 

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    SharedModuleModule
  ],
  exports:[
    SidenavComponent
  ]
})
export class SidenavModule { }
