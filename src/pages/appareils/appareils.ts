import {Component, OnInit} from '@angular/core';
import {LoadingController, MenuController, ModalController, NavController, ToastController} from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.service';
import {AppareilFormPage} from "../appareil-form/appareil-form";
import {FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})
export class AppareilsPage implements OnInit{
  ngOnInit() {
  this.appareilsSubscription = this.appareilsService.appareils$.subscribe(
  (appareils : Appareil[]) => {
    this.appareilsList = appareils.slice();
  }

  );
  this.appareilsService.emitAppareils();
  }

  appareilsList: Appareil[];
    formBuilder: FormBuilder;
  appareilsSubscription : Subscription;
  constructor(private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private appareilsService: AppareilsService,
              private navCtrl : NavController ,
              private  menuCtrl: MenuController) {}

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
  // on
  onFetchList() {
    let loader = this.loadingCtrl.create({
      content: 'Récuperation en cours…'
    });
    loader.present();
    this.appareilsService.retrieveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données récupérées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }
  // on save save data
  onSaveList() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader.present();
    this.appareilsService.saveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }

}
