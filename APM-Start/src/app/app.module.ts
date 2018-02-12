import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

// list of angular modules: https://www.npmjs.com/~angular

@NgModule({
  // our modules
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  // angular and third party modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
