import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
  BrowserModule,
  FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
