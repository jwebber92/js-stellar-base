
describe('StellarBase#hash', function() {

  it("hashes a string properly, using BLAKE2", function() {
    let msg         = "hello world";
    let expectedHex = "256c83b297114d201b30179f3f0ef0cace9783622da5974326b436178aeef610";
    let actualHex   = StellarBase.hash(msg).toString('hex');

    expect(actualHex).to.eql(expectedHex);
  });


  it("hashes a buffer properly, using BLAKE2", function() {
    let msg         = Buffer.from("hello world", 'utf8');
    let expectedHex = "256c83b297114d201b30179f3f0ef0cace9783622da5974326b436178aeef610";
    let actualHex   = StellarBase.hash(msg).toString('hex');

    expect(actualHex).to.eql(expectedHex);
  });

  it("hashes an array of bytes properly, using BLAKE2", function() {
    let msg         = [ 104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100 ];
    let expectedHex = "256c83b297114d201b30179f3f0ef0cace9783622da5974326b436178aeef610";
    let actualHex   = StellarBase.hash(msg).toString('hex');

    expect(actualHex).to.eql(expectedHex);
  });

});
