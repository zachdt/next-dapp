import {useState, forwardRef} from 'react'
import {
  Button,
  Grid,
  Modal,
  Typography
} from '@material-ui/core'

import { useWeb3React }  from '@web3-react/core'

import { Wallet } from './Wallet'

import { usePrevious } from '../../hooks/utils'

export interface Props {
  user: any
}
export const Account = (props: Props) => {

  const { user } = props
  return (
    <>
      <div style={{width: '20em'}}>
        {user}
      </div>
    </>    
  )
}