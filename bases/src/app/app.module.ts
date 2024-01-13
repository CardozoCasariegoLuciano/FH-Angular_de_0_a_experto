import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DgzModule } from './dgz/dgz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DgzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
