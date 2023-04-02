import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  carts: any[] = [];
  form!:FormGroup;
  constructor(private _service : AdminService , private build:FormBuilder) {}

  ngOnInit(): void {
    this.getAllCarts();
    this.form = this.build.group({
      start:[""],
      end:[""]
    })
  }

  getAllCarts(){
    this._service.getAllCarts().subscribe((res:any) => {
      this.carts = res;
    })
  }

  ApplyFilter(){
    let date = this.form.value;
    this._service.getAllCarts(date).subscribe((res:any) => {
      this.carts = res;
    })  
  }

  deletecart(id:number){
    return this._service.DeleteCart(id).subscribe((res:any) => {
      this.getAllCarts();
      alert("Deleted Successfully");
    });
  }
}
