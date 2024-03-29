import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  //templateUrl: './product-list.component.html',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] =[];
  constructor(private ProductService: ProductService) { }
  
  ngOnInit(): void {
    this.listProducts();
  
  }

  listProducts() {
    this.ProductService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
