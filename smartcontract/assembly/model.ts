import { PersistentUnorderedMap, context, PersistentMap, u128 } from "near-sdk-as";

/**
 * This class represents a seed that can be listed on the marketplace.
 * It contains basic properties that are needed to define a seed.
 * The price of the seed is of type u128 that allows storing it in yocto-NEAR, where `1 yocto = 1^-24`.
 */

@nearBindgen
export class Seed {
    id: string;
    name: string;
    description: string;
    image: string;
    location: string;
    price: u128;
    owner: string;
    sold: u32;

    public static fromPayload(payload: Seed): Seed {
        const seed = new Seed();
        seed.id = payload.id;
        seed.name = payload.name;
        seed.description = payload.description;
        seed.image = payload.image;
        seed.location = payload.location;
        seed.price = payload.price;
        seed.owner = context.sender;
        return seed;
    }
    public incrementSoldAmount(): void {
        this.sold = this.sold + 1;
    }
}

/**
 * `seedStorage` - it's a key-value data-structure that is used to store seeds created by sellers.
 */
export const seedStorage = new PersistentUnorderedMap<string, Seed>("LISTED_SEEDS");


/**
 * This class represents a seed that has been bought on the marketplace.
 * It contains basic properties that are needed in the purchase of a seed.
 */
@nearBindgen
export class PurchasedSeed {
    id: string;
    name: string;
    description: string;
    image: string;
    location: string;
    price: u128;
    from: string;
    to : string;
    datePurchased : u64;

    public static fromPayload(payload: PurchasedSeed): PurchasedSeed {
        const purchasedSeed = new PurchasedSeed();
        purchasedSeed.id = payload.id;
        purchasedSeed.name = payload.name;
        purchasedSeed.description = payload.description;
        purchasedSeed.image = payload.image;
        purchasedSeed.location = payload.location;
        purchasedSeed.price = payload.price;
        purchasedSeed.from = payload.from;
        purchasedSeed.to = context.sender;
        purchasedSeed.datePurchased = context.blockTimestamp;
        return purchasedSeed;
    }
    
}

/**
 * `purchasedSeedStorage` - it's a key-value data-structure that is used to store seeds purchased already.
 */
export const purchasedSeedStorage = new PersistentUnorderedMap<string, PurchasedSeed>("PURCHASED_SEED");
