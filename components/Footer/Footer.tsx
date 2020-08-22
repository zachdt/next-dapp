import {
  Toolbar,
  Typography,
  IconButton,
  Grid
} from '@material-ui/core'

export const Footer = () => {
  
  return (
    <Toolbar color='default' style={{top: 'auto', bottom: '0', padding: '.5em'}}>
      <Grid container direction='row' alignItems='center' justify='space-around'>
        <Typography color='textSecondary'>GNU v3.0 License</Typography>
        <Typography color='textSecondary'>template by <strong>zachdt</strong></Typography>
      </Grid>
    </Toolbar>
  )
}