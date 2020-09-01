import { AbstractConnector } from '@web3-react/abstract-connector'

import {injected, walletconnect}  from '../connectors'

export interface Wallet {
  connector: AbstractConnector,
  name: string,
  icon: string
}

// Uniswap Token Interface
export interface Token {
  name: string,
  address: string,
  symbol: string,
  decimals: number,
  chainId: number,
  logoURI: string
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

export const DEFAULT_TOKEN_LIST: string = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'


export enum LocalStorageKeys {
  Version = 'version',
  DarkMode = 'darkMode',
  Deadline = 'deadline',
  Slippage = 'slippage',
  Transactions = 'transactions',
  Tokens = 'tokens',
  TokenList = 'tokenList'
}
