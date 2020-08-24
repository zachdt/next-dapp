import { useState, useEffect, forwardRef } from 'react'
import { UnsupportedChainIdError,  useWeb3React } from '@web3-react/core'

import { WalletConnectConnector, UserRejectedRequestError } from '@web3-react/walletconnect-connector'
import {injected, walletconnect} from '../../connectors'

import { usePrevious } from '../../hooks/utils'
import { WALLETS } from '../../constants'

import { Option } from './Option'
import { Account } from './Account'
import { Pending } from './Pending'

import {
  Paper,
  Typography,
  Divider,
  List,
  Button,
  Modal
} from '@material-ui/core'

export { Account } from './Account'

const WALLET_VIEWS = {
  OPTIONS: 'Options',
  ACCOUNT: 'Account',
  PENDING: 'Pending'
}

export const Wallet = forwardRef(() => {
  // Modal
  const [open, setOpen] = useState(false)

  const { active, account, connector, activate, error } = useWeb3React()

  const [view, setView] = useState(WALLET_VIEWS.ACCOUNT)

  const [pending, setPending] = useState()

  const [pendingError, setPendingError] = useState<boolean>()

  const activePrevious = usePrevious<any>(active)
  const connectorPrevious = usePrevious<any>(connector)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    if (view === WALLET_VIEWS.PENDING) setView(WALLET_VIEWS.OPTIONS)
    setOpen(false)
  }

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

    if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
      connector.walletConnectProvider = undefined
    }

    activate(connector, undefined, true).catch(error => {
      if (error instanceof UserRejectedRequestError) {
        setPendingError(true)
        handleClose()
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

      return (
        <Option
          key={key}
          onClick={() => {
            option.connector === connector
              ? setView(WALLET_VIEWS.ACCOUNT)
              : tryActivation(option.connector)
          }}
          isConnected={false}
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
        <>
          <Button onClick={() => {setView(WALLET_VIEWS.OPTIONS),[setView, view]}}>Change</Button>
          <Account user={account}/>
        </>
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
            <Typography>Connect a Wallet</Typography>
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
      <div style={{width: '20em'}}>
        <Button onClick={handleOpen} variant='outlined' size='large'>connect wallet</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Paper elevation={9} style={{transform: 'translate(100%, 100%)', width: 400, padding: '2em'}} >
          {getContent()}
        </Paper>
      </Modal>
    </>
  )
})
