import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) {
        
    }

    imgWidth: number = 50;
    imgMargin: number = 2;
    pageTitle: string = 'ProductList Title';

    listFilter: string = '';
    customerCCY: string = 'USD';
    

    get filterProducts(): IProduct[] {

        return this.listFilter ? this.performFilter(this.listFilter) : this.products;

    };

    performFilter(filterBy: string): IProduct[] {
        let lowerCaseFilter = filterBy.toLocaleLowerCase();
        return this.products.filter(
            m => m.productName.toLowerCase().includes(lowerCaseFilter))
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product list ' + message;
    }

    showImg: boolean = true;
    products: IProduct[];

    toggleImg(): void {
        this.showImg = !this.showImg;
    }

    ngOnInit(): void {
        console.log("Method not implemented.");
        this.products = this.productService.getProducts();
        this.listFilter = 'cart';
    }
} 