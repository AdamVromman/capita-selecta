import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {CdkDrag,CdkDragHandle} from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';




const listOfComponents = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatChipsModule,
  MatDatepickerModule,
  MatCardModule,
  MatNativeDateModule,
  MatInputModule,
  CdkDrag,
  CdkDragHandle,
  MatSlideToggleModule,
  MatDividerModule,
  MatTableModule
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
