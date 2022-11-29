import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NgswitchComponent } from './ngswitch/ngswitch/ngswitch.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from './input/input.component';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NgswitchComponent,
    CheckboxComponent,
    Employee,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
