import {useState, forwardRef} from 'react'
import {
  Typography,
  Card,
  Button,
  Avatar,
  CardContent,
  Grid,
  CardActionArea,
  IconButton,
  ListItem
} from '@material-ui/core'

import LinkIcon from '@material-ui/icons/Link'

import { WALLETS } from '../../constants';

export interface Props {
  address: string,
  method: any,
  change?: any
}
export const Account = (props: Props) => {

  const { address, method } = props
  return (
    <>
      {Object.keys(WALLETS).map(key => {
        const option = WALLETS[key]
        if (option.connector === method ) {
          return (
            <ListItem button component='a' href={`https://etherscan.io/address/${address}`} target='__none' style={{padding: '1em'}}>
              <Grid container direction='row' alignItems='center' justify='space-between'>
                <Avatar alt={option.name} src={option.icon}/>
                <Typography variant='body1'>{address.slice(0, 10)}...{address.slice(address.length - 10, address.length)} </Typography>
                <LinkIcon/>
              </Grid>
            </ListItem>
          )
        }
      })}

    </>    
  )
}