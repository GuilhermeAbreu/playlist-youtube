import { Component, Input, OnInit } from '@angular/core';
import { YoutubeDetails } from '../../interface/youtube.interface';

@Component({
  selector: 'app-show-video-youtube',
  templateUrl: './show-video-youtube.component.html',
  styleUrls: ['./show-video-youtube.component.scss'],
})
export class ShowVideoYoutubeComponent implements OnInit {

  @Input() videoSelect: YoutubeDetails | null = null;

  constructor(
  ) { }

  ngOnInit() {}

  public video(){

    const regExp = new RegExp(
      /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    );
    const match = this.videoSelect.url.match(regExp);
  
    const url = `https://www.youtube.com/embed/${match[1]}`;

    return url;
  }

}
