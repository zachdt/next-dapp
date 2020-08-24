import { AbstractConnector } from '@web3-react/abstract-connector'

import {injected, walletconnect}  from '../connectors'

export interface Wallet {
  connector: AbstractConnector,
  name: string,
  icon: string
}

export const WALLETS: { [key: string]: Wallet } = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    icon: 'https://gitcoin.co/dynamic/avatar/MetaMask'
  },
  COINBASE: {
    connector: walletconnect,
    name: 'Coinbase Wallet',
    icon: 'https://lh3.googleusercontent.com/3pwxYyiwivFCYflDJtyWDnJ3ZgYuN_wBQBHqCXbKh9tJTdTL1uOrY1VyxeC_yXLTNZk'
  }
}