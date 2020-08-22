import { useMediaQuery } from '@material-ui/core'
import { useLocalStorage } from '../utils/useLocalStorage'

export function useDarkMode() {
  // Warning: cannot use boolean, strings only with Local Storage.
  // Note: without a state management system,
  //       it is difficult to perform type transformations outside of these hooks.
  return useLocalStorage<string>('darkMode', 'false')
}


