import {createHash} from "blake2";

export function hash(data) {
  // console.log(`hash received ${data}`);
  let hash = createHash('blake2b', {digestLength: 32});
  hash.update(new Buffer.from(data));
  // console.log(`hash produced ${hash.digest("hex")}`);
  return hash.digest();
}
