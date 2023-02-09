import { Seed, seedStorage, purchasedSeedStorage, PurchasedSeed } from './model';
import { context, ContractPromiseBatch, u128 } from "near-sdk-as";

/**
 * 
 * A function that is used to purchase a seed based on it's id and also stores
 *  that seed on the purchasedSeedStorage along with it timestamp.
 * 
 */

export function buySeed(seedId: string, name : string, description : string, location : string, from : string, image : string, pId : string): void {
    const seed = getSeed(seedId);
    if (seed == null) {
        throw new Error("seed not found");
    }
    if (seed.price.toString() != context.attachedDeposit.toString()) {
        throw new Error("attached deposit should be greater than the seed's price");
    }
   
    ContractPromiseBatch.create(seed.owner).transfer(context.attachedDeposit);
    seed.incrementSoldAmount();
    seedStorage.set(seed.id, seed);


    const p: PurchasedSeed = {
        id : pId,
        name: name,
        description: description,
        image : image,
        location: location,
        price: seed.price,
        from : from
    };
    purchasedSeedStorage.set(pId, PurchasedSeed.fromPayload(p));
}

/**
 * 
 * @param seed - a seed to be added to the blockchain
 */

export function setSeed(seed: Seed): void {
    let storedSeed = seedStorage.get(seed.id);
    if (storedSeed !== null) {
        throw new Error(`a seed with id=${seed.id} already exists`);
    }

    assert(seed.description.length > 0, "Empty description");
    assert(seed.location.length > 0, "Invalid location");
    assert(seed.image.length > 0, "Invalid image url");
    assert(seed.name.length > 0, "Empty name");

    seedStorage.set(seed.id, Seed.fromPayload(seed));
}

/**
 * 
 * A function that returns a single seed based on it's id
 * 
 * @param id - an identifier of a seed to be returned
 * @returns a seed for a given @param id
 */
export function getSeed(id: string): Seed | null {
    return seedStorage.get(id);
}

/**
 * 
 * A function that returns an array of seeds for all accounts
 * 
 * @returns an array of objects that represent a seed
 */
export function getSeeds(): Array<Seed> {
    return seedStorage.values();
}



/**
 * 
 * A function that deletes a single seed based on a given id and owner 
 *  information on the frontend
 *
 * @param id - an identifier of a given seed to be deleted
 * @delete a seed for a given @param id and owner information
 */
export function deleteSeed(id : string) : void {
    let storedSeed = seedStorage.get(id);
    
    if (storedSeed == null) throw new Error("seed not found");
        else {
            assert(storedSeed.owner.toString() === context.sender.toString(), "Unauthorized sender");
            seedStorage.delete(storedSeed.id);
        }
}



/**
 * 
 * A function that updates a single seed based on a given id and owner information on the frontend
 * 
 * @param _id, _name, _description, _image, _location, _price - are parameters needed to update a seed
 *
 */
 export function  updateSeed(
    id: string, 
    _name: string,
    _description: string,
    _image: string,
    _location: string,
    _price: u128
    ): void {
        const seed = seedStorage.get(id);

        if (seed == null) throw new Error("seed not found");
        else {

            assert(seed.owner.toString() === context.sender.toString(), "Unauthorized sender");
            assert(_description.length > 0, "Empty description");
            assert(_location.length > 0, "Invalid location");
            assert(_image.length > 0, "Invalid image url");
            assert(_name.length > 0, "Empty name");

            seed.name = _name;
            seed.description = _description;
            seed.image = _image;
            seed.location = _location;
            seed.price = _price;

            seedStorage.set(seed.id, seed);
        }
    }


/**
 * 
 * A function that returns an purchased seeds
 * 
 * @returns an array of objects that represent purchased seeds
 */
export function getPurchasedSeeds(): Array<PurchasedSeed> {
    return purchasedSeedStorage.values();
}
