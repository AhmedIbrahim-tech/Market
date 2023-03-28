import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../Services/products.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  data: any = {};
  loading: boolean = false;
  constructor(
    private _route: ActivatedRoute,
    private _service: ProductsService
  ) {
    this.id = this._route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getProductbyId();
  }

  getProductbyId() {
    this.loading = true;
    return this._service.GetProductsByid(this.id).subscribe((res: any) => {
      this.data = res;
      this.loading = false;
    },
    error => {
      this.loading = false;
      alert(error);
    });
  }
}
