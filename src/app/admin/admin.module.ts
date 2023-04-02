import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
