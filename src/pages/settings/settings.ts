<ion-header>
  <ion-navbar>
    <ion-title>
      Page d'accueil
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
    <!--<button ion-button="" (click)="onGoToAppareil()"> Appareils</button>-->
    <button ion-button="" [navPush]="appareilsPage"> Appareils</button>
</ion-content>
