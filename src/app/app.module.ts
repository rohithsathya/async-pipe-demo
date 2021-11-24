import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleAsyncComponent } from './components/simple-async/simple-async.component';
import { AsyncWithAliasComponent } from './components/async-with-alias/async-with-alias.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleAsyncComponent,
    AsyncWithAliasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
