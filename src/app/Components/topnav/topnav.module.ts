import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopnavRoutingModule } from './topnav-routing.module';
import { TopnavComponent } from './topnav.component';
import { SharedModuleModule } from 'src/app/Shared/shared-module/shared-module.module';

@NgModule({
  declarations: [
    TopnavComponent
  ],
  imports: [
    CommonModule,
    TopnavRoutingModule,
    SharedModuleModule
  ],
  exports:[
    TopnavComponent
  ]
})
export class TopnavModule { }
