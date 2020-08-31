import { useState, useEffect, forwardRef } from 'react'
import { UnsupportedChainIdError,  useWeb3React } from '@web3-react/core'

import { WalletConnectConnector, UserRejectedRequestError } from '@web3-react/walletconnect-connector'
import {injected, walletconnect} from '../../connectors'

import { usePrevious } from '../../hooks'
import { WALLETS } from '../../constants'

import { Option } from './Option'
import { Account } from './Account'
import { Pending } from './Pending'
import { AddressButton } from './AddressButton'

import {
  Paper,
  Typography,
  Divider,
  List,
  Button,
  Popper,
  ClickAwayListener,
  IconButton,
  Grid
} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const WALLET_VIEWS = {
  OPTIONS: 'Options',
  ACCOUNT: 'Account',
  PENDING: 'Pending'
}

export const Wallet = forwardRef(() => {
  // Modal
  const [open, setOpen] = useState(null)

  const { active, account, connector, activate, error } = useWeb3React()

  const [view, setView] = useState(WALLET_VIEWS.ACCOUNT)

  const [pending, setPending] = useState()

  const [pendingError, setPendingError] = useState<boolean>()

  const activePrevious = usePrevious<any>(active)
  const connectorPrevious = usePrevious<any>(connector)


  const handleClick = (e: any) => {
    setOpen(open ? null : e.currentTarget)
  }
  const handleClickAway = () => {
    if (view === WALLET_VIEWS.PENDING) setView(WALLET_VIEWS.OPTIONS)
    if (account) setView(WALLET_VIEWS.ACCOUNT)
    setOpen(null)
  }

  const isOpen = Boolean(open)

  useEffect(() => {
    if ((active && !activePrevious) || (connector && connector !== connectorPrevious && !error)) {
      setView(WALLET_VIEWS.ACCOUNT)
    }
  }, [setView, active, error, connector, activePrevious, connectorPrevious])

  const tryActivation = async connector => {
    let name = ''
    Object.keys(WALLETS).map(key => {
      if (connector === WALLETS[key].connector) {
        return (name = WALLETS[key].name)
      }
      return true
    })

    setPending(connector)
    setView(WALLET_VIEWS.PENDING)

    /*if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
      connector.walletConnectProvider = undefined
    }*/

    activate(connector, undefined, true).then(() => {
      setView(WALLET_VIEWS.ACCOUNT)
    
    }).catch(error => {
      if (error instanceof UserRejectedRequestError) {
        setPendingError(true)
        setView(WALLET_VIEWS.OPTIONS)
      }
      if (error instanceof UnsupportedChainIdError) {
        activate(connector)
      } else {
        setPendingError(true)
        setView(WALLET_VIEWS.OPTIONS)
      }
    })
  }

  const options = () => {

    return Object.keys(WALLETS).map(key => {
      const option = WALLETS[key]
      const active = (option.connector === connector)
      return (
        <Option
          key={key}
          onClick={() => {
            active
              ? setView(WALLET_VIEWS.ACCOUNT)
              : tryActivation(option.connector)
          }}
          isConnected={active}
          icon={option.icon}
          name={option.name}
        />
      )
    })
  }

  const getContent = () => {
    if (error) {
      return (
        <>
          {error instanceof UnsupportedChainIdError ? (
            <h5>Please connect to the appropriate Ethereum network.</h5>
          ) : (
            'Error connecting. Try refreshing the page.'
          )}
        </>
      )
    }
    if (account && view === WALLET_VIEWS.ACCOUNT) {
      return (
        <Grid container direction='row' justify='flex-end'>
          <Account address={account} method={connector} />
          <Button variant='text' onClick={() => {setView(WALLET_VIEWS.OPTIONS),[setView, view]}}>Change Wallet</Button>
        </Grid>
      )
    }
    if (pendingError) {
      <List>
        <Typography color='error' variant='h6'>Connection Error</Typography>
        {options()}
      </List>
    }
    return (
      <>
        {view === WALLET_VIEWS.PENDING ? (
          <Pending
            connector={pending}
          />
        ) : (
          <>
            <Typography variant='h6'>Connect Wallet</Typography>
            <br/>
            <List>
              {options()}
            </List>
          </>
        )}
      </>
    )
  }
  return (
    <>
      <div style={{width: '35em'}}>
        {account ? (
          <AddressButton onClick={handleClick} address={account} method={connector}/>
        ) : (
          <Button onClick={handleClick} variant='outlined' size='large'>connect wallet</Button>
        )}
      </div>
      <Popper open={isOpen}
        anchorEl={open}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <Paper elevation={9} style={{width: 350, padding: '1em'}} >
            {getContent()}
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  )
  
})
