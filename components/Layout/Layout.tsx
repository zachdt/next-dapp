import { 
  useState, 
  useContext, 
  FC, 
  createContext, 
  useCallback,
  useEffect,
  useMemo
} from 'react'

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

export const Layout = ({children}) => {

  const [dark, setDark] = useDarkMode()

  return (
    <div>
      <ThemeProvider theme={(dark === 'true') ? createMuiTheme(darkTheme) : createMuiTheme(lightTheme)}>
        <AppBar position='fixed' color='default'>
          <Toolbar>
            <Grid 
              container 
              direction='row' 
              alignItems='center' 
              justify='flex-start' 
              style={{margin: '1em'}}>
              <a style={{ textDecoration: 'none', cursor: 'pointer'}} href='https://github.com/zachdt/next-dapp'>
                <Typography variant='h3' color='textPrimary'>next-dapp</Typography>
              </a>
            </Grid>
            <Grid container direction='row' alignItems='center' justify='flex-end' style={{marginRight: '2em'}}>
              <WbSunnyIcon color='action'/>
              <Switch checked={(dark === 'true')} onChange={e => setDark(e.target.checked.toString())}/>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box color='default' style={{minHeight: '100vh'}}>
          {children}
        </Box>
      </ThemeProvider>
    </div>
  )
}