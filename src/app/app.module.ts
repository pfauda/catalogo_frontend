import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { I7x24Component } from './i7x24/i7x24.component';
import { FormMethodComponent } from './form-method/form-method.component';
import { HtmlviewerComponent } from './htmlviewer/htmlviewer.component';

import { ServicesService } from './services.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Material Components */
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
/* Material Components */

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    I7x24Component,
    FormMethodComponent,
    HtmlviewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    CodemirrorModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
