import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppTextInputComponent } from './app.textInput.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AppTextInputComponent ],
  bootstrap: [ AppComponent, AppTextInputComponent ]
})
export class AppModule { }
