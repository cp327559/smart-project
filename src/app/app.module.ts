import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ElModule} from 'element-angular';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { SmartCockpitComponent } from './smart-cockpit/smart-cockpit.component';
import { SmartUserInfoComponent } from './smart-user-info/smart-user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartCockpitComponent,
    SmartUserInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: SmartUserInfoComponent },  
      { path: 'user/', component: SmartUserInfoComponent },
    ]),
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
