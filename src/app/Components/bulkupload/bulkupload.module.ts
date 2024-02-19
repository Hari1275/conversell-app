import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkuploadRoutingModule } from './bulkupload-routing.module';
import { BulkuploadComponent } from './bulkupload.component';


@NgModule({
  declarations: [
    BulkuploadComponent
  ],
  imports: [
    CommonModule,
    BulkuploadRoutingModule
  ],
  exports:[
    BulkuploadModule
  ]
})
export class BulkuploadModule { }
