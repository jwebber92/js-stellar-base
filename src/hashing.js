import {createHash} from "blake2";

export function hash(data) {
  console.log(`HASH received ${data}`);
  let hash = createHash('blake2b', {digestLength: 32});
  hash.update(new Buffer.from(data));
  console.log(`HASH produced ${hash.digest().toString("hex")}`);
  return hash.digest();
}
