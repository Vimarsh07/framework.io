import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDMQz-sCd_0jqvVHMGTTaY_MVdRGGScmCo",
  authDomain: "wire-26ca9.firebaseapp.com",
  databaseURL:"https://wire-26ca9-default-rtdb.firebaseio.com/",
  projectId: "wire-26ca9",
  storageBucket: "wire-26ca9.appspot.com",
  messagingSenderId: "984148965113",
  appId: "1:984148965113:web:43ee8d4368c0e33e2b5428",
  measurementId: "G-CKLQESHCSW"
};

// 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireDatabaseModule,
    
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
