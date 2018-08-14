import { Component } from '@angular/core';
import {AlertController, MenuController} from "ionic-angular";

@Component({
  selector: 'page-options',
  templateUrl: './options.html'
})
export class OptionsPage {
  constructor(private alertCtrl: AlertController, private menuCtrl: MenuController){

  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
