import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  imports: [MatButtonModule , MatMenuModule, MatToolbarModule , MatIconModule],
  exports: [MatButtonModule , MatMenuModule , MatToolbarModule , MatIconModule],
})
export class MaterialModule { }
