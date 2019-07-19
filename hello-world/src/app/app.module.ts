import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestAsClassComponent } from './test-as-class/test-as-class.component';
import { TestAsAttributeComponent } from './test-as-attribute/test-as-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestAsClassComponent,
    TestAsAttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
