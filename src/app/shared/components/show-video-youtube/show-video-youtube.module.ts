import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SafePipe } from '../../pipe/safepipe.pipe';
import { ShowVideoYoutubeComponent } from './show-video-youtube.component';

@NgModule({
  declarations: [ShowVideoYoutubeComponent, SafePipe],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ShowVideoYoutubeComponent]
})
export class ShowVideoYoutubeModule { }
