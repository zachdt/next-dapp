import { useState } from 'react'

import {
  Switch,
  IconButton,
  Popper,
  Paper,
  Grid,
  ClickAwayListener
} from '@material-ui/core'

import SettingsIcon from '@material-ui/icons/Settings'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

interface Props {
  checked: boolean
  onChange: any
}

export const Settings = (props: Props) => {
  
  const [act, setAct] = useState(null)

  const handleClick = (e: any) => {
    setAct(act ? null : e.currentTarget)
  }
  const handleClickAway = () => {
    setAct(null)
  }

  const open = Boolean(act)

  return (
    <>
      {open ? (
        <IconButton onClick={handleClick} color='secondary'><SettingsIcon/></IconButton> 
      ) : (
        <IconButton onClick={handleClick} ><SettingsIcon/></IconButton>
      )}
      <Popper open={open} anchorEl={act}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Paper elevation={9} style={{padding: '1.2em', marginTop: '1em'}}>
            <Grid container direction='row' alignItems='center' justify='center' style={{marginLeft: '.4em'}}>
              <WbSunnyIcon color='action'/>
              <Switch checked={props.checked} onChange={props.onChange}/>
            </Grid>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  )
}