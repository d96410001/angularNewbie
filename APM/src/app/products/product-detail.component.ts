import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  pageTitle: string = 'Product Detail';
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.productService.getProducts().subscribe(
      products => {
          this.product = products.find(p => p.productId == id)
      },
      error => this.errorMessage = <any>error
    );
  } 

  onBack():void{
    this.router.navigate(['/product']);
  }

  
}
