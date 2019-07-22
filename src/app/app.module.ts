import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpModule } from '@angular/http';
import { I7x24Component } from './i7x24/i7x24.component';

import { HighlightJsModule } from 'ngx-highlight-js';
import { FormMethodComponent } from './form-method/form-method.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    I7x24Component,
    FormMethodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
/*
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
*/
    AppRoutingModule,
    HttpModule,
    HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }