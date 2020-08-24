import {
  Toolbar,
  Typography,
  IconButton,
  Grid
} from '@material-ui/core'

export const Footer = () => {
  
  return (
    <Toolbar color='default' style={{top: 'auto', bottom: '0', paddingTop: '1em'}}>
      <Grid container direction='row' alignItems='center' justify='space-around'>
        <Typography variant='body2' color='textSecondary'>GNU v3.0 License</Typography>
        <Typography variant='body2' color='textSecondary'><strong>&copy;2020</strong> Zachary Thielemann</Typography>
      </Grid>
    </Toolbar>
  )
}