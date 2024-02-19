import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSelectModule,
    MatBadgeModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    
  ],
  exports:[
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSelectModule,
    MatBadgeModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    
  ]
})
export class SharedModuleModule { }
