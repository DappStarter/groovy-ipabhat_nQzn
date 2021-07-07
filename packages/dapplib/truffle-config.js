require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name regret screen clump half arm army giggle'; 
let testAccounts = [
"0x08c8eaa40695f8bc5d3db4a27238609e6a398634c8864c3f76f132e495f15daf",
"0x0ef492119608231f609051c0a316aeae00a627e8f01df849e9690954209dc825",
"0x282c6f5de3850d25fb9d8d7b4e801bd8aa076b9e5493aece92b013b2c8505622",
"0x9475c960b014ab8cf7f0cb45ef4cd34996ecc735d8c15bf4921af50f99c0698b",
"0x8def95933deeef5cb3d30a1cd9872f0638f673f66ad8a87f78633c425ec8ea03",
"0x050a303eafb26560d2f62e24d267c7ea2366ad34b8276bb1eed979f9926e95a5",
"0xf482e0be779db4f025ece9244394e4c4ef3f52286c99ad8ed24141e649fe89c8",
"0xc0c3ad915cddad9a171652385713f47774c1f9c4b6f36d8e4cfd2b267aa87544",
"0x21449b5158f503a978821054c024093fdfe78ca6d6f548906e0e09f88e86904e",
"0x29b127d06d49db9891da3e2fd5f8de6e1be9e41ef87fdf01debfbb9b145c6ff6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

