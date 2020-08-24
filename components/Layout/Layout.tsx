import { 
  useState, 
  useContext, 
  FC, 
  createContext, 
  useCallback,
  useEffect,
  useMemo
} from 'react'

import Link from 'next/link'

import { 
  ThemeProvider, 
  CssBaseline, 
  Switch,
  AppBar,
  Typography,
  createMuiTheme,
  Grid,
  Toolbar,
  Box,
} from '@material-ui/core'

import WbSunnyIcon from '@material-ui/icons/WbSunny'

import { lightTheme, darkTheme } from './Theme'

import { useDarkMode } from '../../hooks/user'
import { Settings } from '../Settings'
import { Wallet } from '../Wallet/Wallet'
import { Footer } from '../Footer'


export const Layout = ({children}) => {

  const [dark, setDark] = useDarkMode()

  return (
    <>
      <ThemeProvider theme={(dark === 'true') ? createMuiTheme(darkTheme) : createMuiTheme(lightTheme)}>
        <AppBar position='fixed' color='default'>
          <Toolbar>
            <Grid 
              container 
              direction='row' 
              alignItems='center' 
              justify='flex-start' 
              style={{margin: '.7em', cursor: 'pointer'}}>
              <Link href='/'>
                <Typography variant='h4' color='textPrimary'>next-dapp</Typography>
              </Link>
            </Grid>
            <Wallet />
            <Settings checked={(dark === 'true')} onChange={e => setDark(e.target.checked.toString())}/>
          </Toolbar>
        </AppBar>
        // overflowX required to prevent AppBar bug
        <Box color='default' style={{height: 'auto', maxWidth: '100%', overflowX: 'hidden', overflowY: 'visible'}}>
          {children}
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  )
}