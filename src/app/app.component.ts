import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import * as firebase from "firebase";
import {AuthPage} from "../pages/auth/auth";
import {AuthService} from "../services/auth.service";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  authPage:any = AuthPage;

  @ViewChild('content') content: NavController;
  private isAuth: boolean = false;

//envoyer les donnees en nav
  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }
  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // Initialize Firebase
      // Initialize Firebase
      let config = {
        apiKey: "AIzaSyBYL_9bcFeGN8DaphVXl_H12mKeRGESuRQ",
        authDomain: "projet-ionic-29735.firebaseapp.com",
        databaseURL: "https://projet-ionic-29735.firebaseio.com",
        projectId: "projet-ionic-29735",
        storageBucket: "projet-ionic-29735.appspot.com",
        messagingSenderId: "315525370687"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      );
    });



  }//fin const
  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}
