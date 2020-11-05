import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {File} from '@ionic-native/file/ngx'
import {ImageResizer} from '@ionic-native/image-resizer/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {Base64} from '@ionic-native/base64/ngx';
 import {Camera} from '@ionic-native/camera/ngx';
 import {Crop} from '@ionic-native/crop/ngx';

//  import {Tensor} from '@tensorflow/tfjs';
// import Chartjs from 'chartjs';
 

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
   
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileOpener,
    ImageResizer,
    Base64,
    Camera,
    Crop,
    // Tensor,
    // Chartjs,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
