import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { SelectComponent } from './Components/select/select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [
    HeaderComponent,
    ReactiveFormsModule,
    SpinnerComponent,
    FormsModule,
    SelectComponent,
    RouterModule
  ]
  
})
export class SharedModule { }
