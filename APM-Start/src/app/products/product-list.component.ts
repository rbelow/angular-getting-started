import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

// technology is a medium, not the end

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    // https://www.typescriptlang.org/docs/handbook/basic-types.htmls
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        // if there is no filter we display all products
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    // the best place to set default values for more complex properties
    // is in the `class` `constructor`. it's executed when the component first initializes
    // ts shorthand for: declare variable > define parameter > set variable to parameter
    constructor(private _productService: ProductService) { }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        // case insensitive comparisson
        filterBy = filterBy.toLocaleLowerCase();
        // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        // fix for `includes`
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products
                // set `filteredProducts` here instead of in the `constructor`
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error); // `<any>` casting operator: cast the error returned to the any data type 
    }
}
