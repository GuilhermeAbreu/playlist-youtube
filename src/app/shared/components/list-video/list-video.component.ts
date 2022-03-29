import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YoutubeDetails } from '../../interface/youtube.interface';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss'],
})
export class ListVideoComponent implements OnInit {

  @Input() videos: YoutubeDetails [] = [];

  @Output() eventVideoSelect: EventEmitter<YoutubeDetails> = new EventEmitter<YoutubeDetails>();

  constructor() { }

  ngOnInit() {}

  public initVideo(video: YoutubeDetails): void {
    this.eventVideoSelect.emit(video);
  }

  public removeVideo(video: YoutubeDetails): void {
    this.videos = this.videos.filter(v => v !== video);
  }

}
