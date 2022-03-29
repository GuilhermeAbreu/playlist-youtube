import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListVideoComponent } from './list-video.component';



@NgModule({
  declarations: [ListVideoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ListVideoComponent,
  ]
})
export class ListVideoModule { }
