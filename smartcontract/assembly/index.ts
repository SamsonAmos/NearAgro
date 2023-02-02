import { Product, productsStorage, purchasedProductsStorage, PurchasedProduct } from './model';
import { context, ContractPromiseBatch, u128 } from "near-sdk-as";


export function buyProduct(productId: string, name : string, description : string, location : string, from : string, image : string, pId : string): void {
    const product = getProduct(productId);
    if (product == null) {
        throw new Error("product not found");
    }
    if (product.price.toString() != context.attachedDeposit.toString()) {
        throw new Error("attached deposit should be greater than the product's price");
    }
   
    ContractPromiseBatch.create(product.owner).transfer(context.attachedDeposit);
    product.incrementSoldAmount();
    productsStorage.set(product.id, product);


    const p: PurchasedProduct = {
        id : pId,
        name: name,
        description: description,
        image : image,
        location: location,
        price: product.price,
        from : from
    };
    purchasedProductsStorage.set(pId, PurchasedProduct.fromPayload(p));
}

/**
 * 
 * @param product - a product to be added to the blockchain
 */
export function setProduct(product: Product): void {
    let storedProduct = productsStorage.get(product.id);
    if (storedProduct !== null) {
        throw new Error(`a product with id=${product.id} already exists`);
    }
    productsStorage.set(product.id, Product.fromPayload(product));
}

/**
 * 
 * A function that returns a single product for given owner and product id
 * 
 * @param id - an identifier of a product to be returned
 * @returns a product for a given @param id
 */
export function getProduct(id: string): Product | null {
    return productsStorage.get(id);
}

/**
 * 
 * A function that returns an array of products for all accounts
 * 
 * @returns an array of objects that represent a product
 */
export function getProducts(): Array<Product> {
    return productsStorage.values();
}

export function getPurchasedProducts(): Array<PurchasedProduct> {
    return purchasedProductsStorage.values();
}


export function deleteProduct(id : string) : void {
    let storedProduct = productsStorage.get(id);
    
    if (storedProduct == null) throw new Error("drug not found");
        else {
            productsStorage.delete(storedProduct.id);
        }
}

 export function  updateProduct(
    id: string, 
    _name: string,
    _description: string,
    _image: string,
    _location: string,
    _price: u128
    ): void {
        const product = productsStorage.get(id);

        if (product == null) throw new Error("product not found");
        else {
            product.name = _name;
            product.description = _description;
            product.image = _image;
            product.location = _location;
            product.price = _price;

            productsStorage.set(product.id, product);
        }
    }

