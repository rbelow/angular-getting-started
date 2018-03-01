import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import modules for side effects only **without** features
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) { }

    // return an observable of `IProduct` array
    getProducts(): Observable<IProduct[]> {
        // use the get method generic parameter with `IProduct` to map the http response automatically
        return this._http.get<IProduct[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError); // call `handleError` passing all parameters
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
