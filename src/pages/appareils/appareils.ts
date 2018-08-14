import { Component } from '@angular/core';
import {MenuController, ModalController, NavController} from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.service';
import {AppareilFormPage} from "../appareil-form/appareil-form";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})
export class AppareilsPage {

  appareilsList: Appareil[];
    formBuilder: FormBuilder;

  constructor(private modalCtrl: ModalController,
              private appareilsService: AppareilsService,private navCtrl : NavController , private  menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.appareilsList = this.appareilsService.appareilsList.slice();
  }

  onLoadAppareil(index: number) {
    let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
    modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
  onNewAppareil() {
    this.navCtrl.push(AppareilFormPage);
  }

}
