import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayListYoutubeComponent } from './play-list-youtube.component';

const routes: Routes = [
  {
    path: '',
    component: PlayListYoutubeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayListYoutubeRoutingModule { }
