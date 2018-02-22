import { Component } from "@angular/core";
import { ProductService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    `,
    // register `ProductService` in the root to make it available to **all** components
    providers:[ ProductService ]
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
