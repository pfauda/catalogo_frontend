import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { I7x24Component } from './i7x24/i7x24.component';

import { HighlightJsModule } from 'ngx-highlight-js';
import { FormMethodComponent } from './form-method/form-method.component';

import { ServicesService } from './services.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Material Components */
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
/* Material Components */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    I7x24Component,
    FormMethodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
/*
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
*/
    FormsModule,
    AppRoutingModule,
    HighlightJsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
