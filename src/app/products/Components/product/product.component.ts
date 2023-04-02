import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data!:IProduct
  @Output() item = new EventEmitter();
  CheckAddProductToCart:boolean = false;
  Amount:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  AddToCart(){
    this.item.emit({item:this.data , quantity:this.Amount});
  }
}
