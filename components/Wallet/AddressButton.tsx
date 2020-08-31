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
  Tooltip,
  CircularProgress
} from '@material-ui/core'

import CallMadeIcon from '@material-ui/icons/CallMade'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { WALLETS } from '../../constants';

export interface Props {
  address: string,
  method: any,
  transaction?: boolean,
  onClick: any
}
export const AddressButton = (props: Props) => {

  const { address, method, transaction, onClick } = props
  return (
    <>
      {Object.keys(WALLETS).map(key => {
        const option = WALLETS[key]
        if (option.connector === method ) {
          return (
            <ListItem button onClick={onClick} style={{padding: '1em'}}>
              <Grid container direction='row' alignItems='center' justify='space-evenly'>
                <Avatar alt={option.name} src={option.icon}  style={{marginRight: '0em'}}/>
                <Typography variant='body1'>{address.slice(0, 10)}...{address.slice(address.length - 10, address.length)}</Typography>
                <Tooltip title='View on Etherscan'>
                  <IconButton size='small' component='a' target='__none' href={`https://etherscan.io/address/${address}`}>
                    {(transaction === null) ? (
                      <CallMadeIcon style={{fontSize: '1em'}}/>
                    ) : 
                      (transaction === false) ? (
                        <CircularProgress color='inherit' />
                      ) : (
                        <CheckCircleIcon color='inherit'/>
                      ) 
                    }
                  </IconButton>
                </Tooltip>
              </Grid>
            </ListItem>
          )
        }
      })}
    </>    
  )
}