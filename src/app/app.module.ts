import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { ListQuoteComponent } from './list-quote/list-quote.component'; // <-- Import HttpModule
@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponent,
    ListQuoteComponent
  ],
  imports: [
    BrowserModule,
	FormsModule, // <-- Include module in our AppModules
	HttpModule // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
