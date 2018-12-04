// https://github.com/mangacoinproject/mangacoin/blob/mangacoin-0.15.2.4/src/chainparams.cpp

var common = {
  name: 'Mangacoin',
  unit: 'MANGA'
}

var main = Object.assign({}, {
  hashGenesisBlock: '39c55d04ea8b5117abb84809c862a9d17212bdae22115bef80f6a508f2a24ab6',
  port: 10378,
  portRpc: 28400,
  protocol: {
    magic: 0xf9c0acb9
  },
  seedsDns: [
    "dnsseed.fthservice.com",
    "dnsseed.manga-core.com"
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 22,
    private: 176,
    public: 110,
    scripthash: 97
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '39c55d04ea8b5117abb84809c862a9d17212bdae22115bef80f6a508f2a24ab6',
  port: 33378,
  portRpc: 28402,
  protocol: {
    magic: 0xf9c0acb9
  },
  seedsDns: [
    "dnsseed.fthservice.com",
    "dnsseed.manga-core.com"
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 239,
    public: 127,
    scripthash: 132
  }
}, common)

module.exports = {
  main: main,
  test: test
}
