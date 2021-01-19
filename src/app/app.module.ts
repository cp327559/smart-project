import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ElModule} from 'element-angular';

import { AppComponent } from './app.component';
import { SmartCockpitComponent } from './smart-cockpit/smart-cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartCockpitComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
