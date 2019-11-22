import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

import { I7x24Component } from './i7x24/i7x24.component';

import { HighlightJsModule } from 'ngx-highlight-js';
import { FormMethodComponent } from './form-method/form-method.component';

import { ServicesService } from './services.service';

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
    HighlightJsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
