require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember assume inflict kitchen swift gift'; 
let testAccounts = [
"0x32624c43338572c50df71ac5e82cfba4bd7ec10d51e9ece7b12652f89ca5e7fa",
"0x06b9d0d17c335627c1918e90377bcfdb04d4ba282864b8dfee0204beb1ce23ed",
"0xb96961b7e5b09f0252f3f63cba3987ca1600f277bb4b92d4c9e5559befe1c18e",
"0x242604d993b5c32c3648ae7e3a20ba1c8617852ab2c9e188925c15c8f042c7f9",
"0xed9f20d3036ee64be319f748ca310f0b0babc1115b0e8fd70ab475fe5cbe2fdf",
"0x4453829d57a95b9d49abb964ed834983de3b85edac7fc2f3d7ecff39a9cb448b",
"0x720c257e102287f3ded0871f429f61f4ce8ce9f388987064d05f66d9784617c6",
"0xa0fb9ba2bfe408612bca9b750940fcc0f9709206aee91e6846aaa92d1935f560",
"0x1b7ae28c6c8636c3c7b88dcfa474f221dfdab44c3bdcba074925cfa22d9fe5ea",
"0xb6963bcab77f3960251376ca5284388d067a7ddd00e87abf1f28de923565fda8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


