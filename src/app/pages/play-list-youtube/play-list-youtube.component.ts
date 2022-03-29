import { Component, OnInit } from '@angular/core';
import { ModalAddUrlService } from './../../shared/components/modal-add-url/modal-add-url.service';
import { YoutubeDetails } from './../../shared/interface/youtube.interface';

@Component({
  selector: 'app-play-list-youtube',
  templateUrl: './play-list-youtube.component.html',
  styleUrls: ['./play-list-youtube.component.scss'],
})
export class PlayListYoutubeComponent implements OnInit {

  public videos: YoutubeDetails[] = [];
  public videoSelect: YoutubeDetails | null = null;
  
  constructor(
    private modalAddUrlService: ModalAddUrlService,
  ) { }

  ngOnInit() {}

  public async addModal(): Promise<void> {
    const resultASddUrl = await this.modalAddUrlService.open();
    if (resultASddUrl) {
      this.videos.push(resultASddUrl);
    }
  }

  public viewVideo(video: any): void {
    this.videoSelect = video;
  }

  public removeVideo(video: any): void {
    this.videos = this.videos.filter(v => v !== video);
  }

}
