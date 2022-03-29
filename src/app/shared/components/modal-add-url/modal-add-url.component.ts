import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl, FormControl, ValidationErrors,
  Validators
} from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { RequestService } from '../../service/request.service';
import { YoutubeDetails } from './../../interface/youtube.interface';

@Component({
  selector: 'app-modal-add-url',
  templateUrl: './modal-add-url.component.html',
  styleUrls: ['./modal-add-url.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalAddUrlComponent implements OnInit {
  
  public formControlUrl: FormControl;

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private resquetService: RequestService,
  ) {
    this.formControlUrl = new FormControl('', [
      Validators.required,
      this.isUrlYoutube,
    ]);
  }

  ngOnInit() {
  }

  public async addUrl(): Promise<void> {
    if (this.formControlUrl.invalid){
      this.toastController.create({
        message: 'URL inválida',
        duration: 5000,
        color: 'danger',
        position: 'top',
      })
    }

    const resultDescription = await this.resquetService.get(
      `https://www.youtube.com/oembed?url=${this.formControlUrl.value}&format=json`,
    )

    resultDescription.url = this.formControlUrl.value;

    this.closeModal(resultDescription);
  }

  private isUrlYoutube(control: AbstractControl): ValidationErrors | null {
    const regExp = new RegExp(
      /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    );
    const match = control.value.match(regExp);
    if (match && match[1].length === 11) {
      return null;
    }
    return {
      urlInvalid: 'URL inválida',
    };
  }

  public closeModal(youtuberDetail?: YoutubeDetails): void {
    this.modalController.dismiss(youtuberDetail);
  }

}
