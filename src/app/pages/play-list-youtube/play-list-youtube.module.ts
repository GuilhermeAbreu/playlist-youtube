import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListVideoModule } from 'src/app/shared/components/list-video/list-video.module';
import { ModalAddUrlComponent } from 'src/app/shared/components/modal-add-url/modal-add-url.component';
import { ShowVideoYoutubeModule } from 'src/app/shared/components/show-video-youtube/show-video-youtube.module';
import { PlayListYoutubeRoutingModule } from './play-list-youtube-routing.module';
import { PlayListYoutubeComponent } from './play-list-youtube.component';

@NgModule({
  declarations: [PlayListYoutubeComponent, ModalAddUrlComponent],
  imports: [
    CommonModule,
    PlayListYoutubeRoutingModule,
    ListVideoModule,
    ShowVideoYoutubeModule,
    IonicModule,
    ReactiveFormsModule,
  ],
})
export class PlayListYoutubeModule {}
