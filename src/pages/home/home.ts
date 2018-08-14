import { Component } from '@angular/core';
import {AlertController, MenuController, NavController} from 'ionic-angular';
import {AppareilsPage} from "../appareils/appareils";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private alertCtrl: AlertController, private menuCtrl: MenuController){

  }
  appareilsPage=AppareilsPage;
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
