import {
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  Button
} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

export interface Props {
  isConnected: boolean,
  icon: string,
  name: string,
  onClick?: any
}

export const Option = (props: Props) => {
  const { isConnected, icon, name, onClick } = props
  const isMetamask = window.ethereum && window.ethereum.isMetaMask

  if (isConnected) {
    return (
      <ListItem button selected onClick={onClick} >
        <ListItemAvatar>
          <Avatar alt={name} src={icon}/>
        </ListItemAvatar>
        <ListItemText primary={name} />
        <ListItemSecondaryAction style={{fontSize: '3em'}}>
          <CheckCircleIcon/>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
  return (
      <ListItem button onClick={onClick} >
        <ListItemAvatar>
          <Avatar alt={name} src={icon}/>
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItem>
  )
}
