import {
  Typography,
  Paper,
  Grid,
  Divider
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

export default function index() {
  return (
    <Paper elevation={9} style={{margin: '1em', padding: '3em'}}>
      <Grid container direction='row' alignItems='center' justify='center'>
        <img width='100em' src='https://img2.pngio.com/ethereum-brand-assets-ethereumorg-eth-png-2500_4168.png'/>
        <AddIcon style={{fontSize: '7em', margin: '1em'}} />
        <img width='200em' src='https://www.elasticpath.com/sites/default/files/2020-04/NextJS_Logo_Ping_Pong_Element.jpg'/>
      </Grid>
      <br/>
        <Typography variant='h3'>Welcome to 
          <a style={{ textDecoration: 'none', cursor: 'pointer', marginLeft: '.3em'}} href='https://github.com/zachdt/next-dapp'>
            next-dapp
          </a>
        </Typography>
      <br/>
      <Divider />
      <Typography variant='h6'>A fully featured Next.js template for modern Etheruem DApp developement.</Typography>
    </Paper>
  )
}