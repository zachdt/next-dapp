import {
  Typography,
  Paper
} from '@material-ui/core'

export default function index() {
  return (
    <Paper elevation={9} style={{margin: '1em', padding: '3em'}}>
      <Typography variant='h2'>Welcome to next-dapp</Typography>
    </Paper>
  )
}