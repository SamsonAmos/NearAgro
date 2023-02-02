import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createSeed(seed) {
  seed.id = uuid4();
  seed.price = parseNearAmount(seed.price + "");
  return window.contract.setSeed({ seed });
}

export function getSeeds() {
  return window.contract.getSeeds();
}

export function getPurchasedSeeds() {
  return window.contract.getPurchasedSeeds();
}

export function getSeed(id) {
  return window.contract.getSeed({id});
}

export async function buySeed({ id, price, name, description, location, from, image }) {
	const pId = uuid4();
  await window.contract.buySeed({ seedId: id, name, description, location, from, image, pId }, GAS, price);
}

export async function deleteSeed(id) {
  await window.contract.deleteSeed({id});
}

export async function updateSeed(id, _name, _description, _image, _location, _price) {
	_price = parseNearAmount(_price + "");

  await window.contract.updateSeed({id, _name, _description, _image, _location, _price});
}
