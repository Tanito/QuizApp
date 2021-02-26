import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsPageModule } from './pages/tabs/tabs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpXhrBackend, HttpBackend } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { environment } from '../environments/environment';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(), 
            AppRoutingModule,TabsPageModule, 
            BrowserAnimationsModule, 
            HttpClientModule, 
            IonicStorageModule.forRoot(),
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireDatabaseModule,
            AngularFireAuthModule],
  providers: [AngularFireDatabase,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
