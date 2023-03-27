import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
    HttpClientModule
  ],
  exports : [
    HeaderComponent,
    SpinnerComponent,
    FormsModule,
    SelectComponent
  ]
  
})
export class SharedModule { }
