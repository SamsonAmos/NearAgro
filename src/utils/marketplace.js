import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createSeed(seed) {
  seed.id = uuid4();
  seed.price = parseNearAmount(seed.price + "");
  return window.contract.setSeed({ seed }); // sets seed for the Rust contract
}

export function getSeeds() {
  return window.contract.getSeeds(); // gets seeds for the Rust contract
}

export function getPurchasedSeeds() {
  return window.contract.getPurchasedSeeds(); // gets purchased seeds for the Rust contract
}

export function getSeed(id) {
  return window.contract.getSeed({id}); // gets seed for the Rust contract
}

// buys seed for the Rust contract
export async function buySeed({ id, price, name, description, location, from, image }) {
	const pId = uuid4();
  await window.contract.buySeed({ seedId: id, name, description, location, from, image, pId }, GAS, price);
}


export async function deleteSeed(id) {
  await window.contract.deleteSeed({id}); // deletes seed for the Rust contract
}


// update seed for the Rust contract
export async function updateSeed(id, _name, _description, _image, _location, _price) {
	_price = parseNearAmount(_price + "");

  await window.contract.updateSeed({id, _name, _description, _image, _location, _price});
}
