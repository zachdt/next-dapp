// REPLACE THIS :)

import {
  Typography,
  Paper,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button
} from '@material-ui/core'

export default function index() {

  return (
    <>
      <Grid container direction='column' alignItems='center' justify='center'>
        <img width='100em' src='https://img2.pngio.com/ethereum-brand-assets-ethereumorg-eth-png-2500_4168.png'/>
        <br/>
        <Typography variant='h1' color='textPrimary'>
            next-dapp
        </Typography>
        <br/>
        <Button variant='outlined' color='inherit' href='https://github.com/zachdt/next-dapp'>View on Github</Button>
        <br/>
        <Typography variant='h6'>A fully featured Next.js template for rapid Etheruem DApp development</Typography>
      </Grid>
      <div style={{minHeight: '2em'}}/>
      <Grid container direction='row' alignItems='flex-start' justify='space-around' spacing={4} style={{padding: '1em'}} >
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <Paper elevation={9} style={{padding: '1em'}}>
            <Typography variant='h5' style={{padding: '1em'}}>Wallet Support</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Metamask logo" src='https://gitcoin.co/dynamic/avatar/MetaMask'/>
                </ListItemAvatar>
                <ListItemText primary='Metamask'/>
              </ListItem>
              <Divider variant='inset' style={{width: '30%'}} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Coinbase Wallet logo" src='https://lh3.googleusercontent.com/3pwxYyiwivFCYflDJtyWDnJ3ZgYuN_wBQBHqCXbKh9tJTdTL1uOrY1VyxeC_yXLTNZk'/>
                </ListItemAvatar>
                <ListItemText primary='Coinbase Wallet'/>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <Paper elevation={9} style={{padding: '1em'}}>
            <Typography variant='h5' style={{padding: '1em'}}>Technical Stack</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="React logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'/>
                </ListItemAvatar>
                <ListItemText primary='React'/>
              </ListItem>
              <Divider variant='inset' style={{width: '30%'}} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Next.js logo" src='https://cdn.worldvectorlogo.com/logos/next-js.svg'/>
                </ListItemAvatar>
                <ListItemText primary='Next.js'/>
              </ListItem>
              <Divider variant='inset' style={{width: '30%'}} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="TS logo" src='https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b.jpg'/>
                </ListItemAvatar>
                <ListItemText primary='TypeScript'/>
              </ListItem>
              <Divider variant='inset' style={{width: '30%'}} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Material UI logo" src='https://material-ui.com/static/logo.png'/>
                </ListItemAvatar>
                <ListItemText primary='Material-UI'/>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}