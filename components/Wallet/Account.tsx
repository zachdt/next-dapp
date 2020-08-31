import {
  Typography,
  Card,
  Button,
  Avatar,
  CardContent,
  Grid,
  CardActionArea,
  IconButton,
  ListItem,
  Divider,
  Tooltip
} from '@material-ui/core'

import CallMadeIcon from '@material-ui/icons/CallMade';

import { WALLETS } from '../../constants';

export interface Props {
  address: string,
  method: any,
}
export const Account = (props: Props) => {

  const { address, method } = props
  return (
    <>
      {Object.keys(WALLETS).map(key => {
        const option = WALLETS[key]
        if (option.connector === method ) {
          return (
            <ListItem style={{padding: '1em'}}>
              <Grid container direction='row' alignItems='center' justify='space-between'>
                <Avatar alt={option.name} src={option.icon}  style={{marginRight: '0em'}}/>
                <Typography variant='body1'>{address.slice(0, 10)}...{address.slice(address.length - 10, address.length)}</Typography>
                <Tooltip title='View on Etherscan'>
                  <IconButton component='a' target='__none' href={`https://etherscan.io/address/${address}`}><CallMadeIcon style={{fontSize: '1em'}}/></IconButton>
                </Tooltip>
              </Grid>
            </ListItem>
          )
        }
      })}
    </>    
  )
}