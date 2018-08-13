import { Component } from '@angular/core';
import {AlertController} from "ionic-angular";
@Component({
  selector: 'page-setting',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  constructor(private alertCtrl: AlertController){

  }
  onToggleLights(){
    let alert = this.alertCtrl.create(
      {
        title: 'Etes -vous certains de vouloir continuer ? ',
        subTitle: 'Allumer ou etteindre les lumieres ?',
        buttons: [
          {
            text: 'Annuler ',
            role: 'cancel',

          },
          {
            text : 'Confirmer',
            handler: ()=> console.log('confimation !')
          }
        ]
      }
    );
    //afficher lalerte
    alert.present();
  }
}
