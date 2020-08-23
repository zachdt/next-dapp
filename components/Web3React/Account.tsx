import {useState} from 'react'
import {
  Button,
  Grid,
  Modal,
  Typography
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
      <div style={{width: '20em'}}>
        <Button onClick={handleOpen} variant='outlined' size='large'>connect wallet</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <OptionsModal />
      </Modal>
    </>    
  )
}