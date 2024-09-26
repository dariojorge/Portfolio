import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BodyComponent } from "./body/body.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
