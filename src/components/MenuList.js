import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }))

  const menus = [
      {
          name:"My Hotels",
          number:"5",

      },
      {
        name:"My Clients",
        number:"100",
      },
      {
        name:"My Users",
        number:"2000",
      }
  ]
export default function MenuList(){
    const classes = useStyles();
    const [dense] = React.useState(false);
    const [secondary] = React.useState(false);
    
    return (
        <List dense={dense}>
        {menus.map(val => (
            <div>
          <ListItem>
            <ListItemAvatar>
              {/* <Avatar>
                <FolderIcon />
              </Avatar> */}
            </ListItemAvatar>
            <ListItemText
              primary={val.name}
              secondary={secondary ? 'Secondary text' : null}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
            <Chip variant="outlined" color="secondary" label={val.number}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider/>
          </div>
        )
        )}
      </List>
    )
}