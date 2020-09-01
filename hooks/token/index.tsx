import { LocalStorageKeys, DEFAULT_TOKEN_LIST } from '../../constants'
import { useLocalStorage } from '../utils'

export function useTokenList() {
  return useLocalStorage<string>(LocalStorageKeys.TokenList, DEFAULT_TOKEN_LIST)
}
