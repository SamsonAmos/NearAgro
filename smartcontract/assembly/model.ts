import { PersistentUnorderedMap, context, PersistentMap, u128 } from "near-sdk-as";

@nearBindgen
export class Product {
    id: string;
    name: string;
    description: string;
    image: string;
    location: string;
    price: u128;
    owner: string;
    sold: u32;
    public static fromPayload(payload: Product): Product {
        const product = new Product();
        product.id = payload.id;
        product.name = payload.name;
        product.description = payload.description;
        product.image = payload.image;
        product.location = payload.location;
        product.price = payload.price;
        product.owner = context.sender;
        return product;
    }
    public incrementSoldAmount(): void {
        this.sold = this.sold + 1;
    }
}

export const productsStorage = new PersistentUnorderedMap<string, Product>("LISTED_PRODUCTS");


@nearBindgen
export class PurchasedProduct {
    id: string;
    name: string;
    description: string;
    image: string;
    location: string;
    price: u128;
    from: string;
    to : string;
    datePurchased : u64;

    public static fromPayload(payload: PurchasedProduct): PurchasedProduct {
        const purchasedProduct = new PurchasedProduct();
        purchasedProduct.id = payload.id;
        purchasedProduct.name = payload.name;
        purchasedProduct.description = payload.description;
        purchasedProduct.image = payload.image;
        purchasedProduct.location = payload.location;
        purchasedProduct.price = payload.price;
        purchasedProduct.from = payload.from;
        purchasedProduct.to = context.sender;
        purchasedProduct.datePurchased = context.blockTimestamp;
        return purchasedProduct;
    }
    
}

export const purchasedProductsStorage = new PersistentUnorderedMap<string, PurchasedProduct>("PURCHASED_PRODUCTS");
