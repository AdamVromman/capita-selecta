import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips'


const listOfComponents = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatChipsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...listOfComponents
  ],
  exports: [
    listOfComponents
  ]
})
export class MaterialModule { }
