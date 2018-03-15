import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [MatButtonModule , MatMenuModule, MatToolbarModule , MatIconModule , MatGridListModule , MatSelectModule],
  exports: [MatButtonModule , MatMenuModule , MatToolbarModule , MatIconModule , MatGridListModule , MatSelectModule],
})
export class MaterialModule { }
