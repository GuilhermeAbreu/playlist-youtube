import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { YoutubeDetails } from './../../interface/youtube.interface';
import { ModalAddUrlComponent } from './modal-add-url.component';

@Injectable({
    providedIn: "root"
})
export class ModalAddUrlService {

    constructor(
        private modalController: ModalController
    ) {}


    public async open(): Promise<YoutubeDetails | undefined> {
        const modalAddUrl = await this.modalController.create({
            component: ModalAddUrlComponent,
            cssClass: "teste-modal-class"
        })
        
        await modalAddUrl.present();
        const result = await modalAddUrl.onDidDismiss();

        return result.data;

    }

}