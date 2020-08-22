import {useState} from 'react'
import {
  Button,
  Grid,
  Modal
} from '@material-ui/core'

import { OptionsModal } from '../Web3React'

export const Account = () => {

  const [open, setOpen] = useState(false)
  
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpen}>Link Wallet</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <OptionsModal />
      </Modal>
    </>    
  )
}