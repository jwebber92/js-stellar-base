import {sha256} from "sha.js";

import {createHash} from "blake2";

// export function hash(data) {
//   let hasher = new sha256();
//   hasher.update(data, 'utf8');
//   return hasher.digest();
// }

export function hash(data) {
  let hash = createHash('blake2b', {digestLength: 32});
  hash.update(new Buffer(data));
  return hash.digest("hex");
}