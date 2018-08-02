import {sha256} from "sha.js";

import {blake2b} from "blakejs";

export function hash(data) {
  let hasher = new sha256();
  hasher.update(data, 'utf8');
  return hasher.digest();
}

export function blake2(data) {
  return blake2b.blake2b(data);
}