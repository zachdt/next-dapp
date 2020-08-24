import { CircularProgress, Typography, Grid, Button,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar, } from '@material-ui/core'
import { WALLETS } from '../../constants'

export interface Props {
  connector: any
}

export const Pending = (props: Props) => {
  const { connector } = props

  const isMetamask = window?.ethereum?.isMetamask

  return (
    <>
      {Object.keys(WALLETS).map(key => {
        const option = WALLETS[key]
        if (option.connector === connector) {
          return (
            <Grid container style={{padding: '.6em'}}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={option.name} src={option.icon}/>
                </ListItemAvatar>
                <ListItemText primary={option.name} />
                <CircularProgress style={{marginLeft: '2em'}}/>
              </ListItem>
            </Grid>
          )
        }
      })}
    </>
  )
}
