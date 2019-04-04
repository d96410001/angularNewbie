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
    filteredProducts: IProduct[] = [];

    _listFilter: string = '';
    customerCCY: string = 'USD';
    errorMessage: string = "";
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

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
        this.productService.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
        );
        this.listFilter = 'cart';
    }
} 