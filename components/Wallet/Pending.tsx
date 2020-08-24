import { CircularProgress, Typography, Grid, Button } from '@material-ui/core'

export interface Props {
  connector: any
}

export const Pending = (props: Props) => {
  const { connector } = props

  const isMetamask = window?.ethereum?.isMetamask

  return (
    <Grid container direction='row' spacing={4}>
      <Typography variant='h5'>Connecting to {connector.name}</Typography>
      <CircularProgress></CircularProgress>
    </Grid>
  )
}
