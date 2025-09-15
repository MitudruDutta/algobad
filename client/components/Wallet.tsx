import { WalletManager, WalletId, NetworkId } from '@txnlab/use-wallet'

const manager = new WalletManager({
  wallets: [WalletId.PERA],
  defaultNetwork: NetworkId.TESTNET // or just 'mainnet'
})