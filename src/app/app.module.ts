import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleAsyncComponent } from './components/simple-async/simple-async.component';
import { AsyncWithAliasComponent } from './components/async-with-alias/async-with-alias.component';
import { WithoutAsyncComponent } from './components/without-async/without-async.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleAsyncComponent,
    AsyncWithAliasComponent,
    WithoutAsyncComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
