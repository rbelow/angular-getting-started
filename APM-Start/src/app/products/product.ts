export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

// `class` for the product business object. in general we create a business `class` if
// that `class` will provide functionality that we want to use throughout our app
// export class Product implements IProduct {
//     constructor(
//         public productId: number,
//         public productName: string,
//         public productCode: string,
//         public releaseDate: string,
//         public price: number,
//         public description: string,
//         public starRating: number,
//         public imageUrl: string
//     ) { }

//     calculateDiscount(percent: number): number {
//         return this.price - (this.price * percent / 100);
//     }
// }
