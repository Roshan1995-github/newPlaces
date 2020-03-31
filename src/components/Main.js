import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuList from '../components/MenuList'
import Overview from '../components/Overview'
import Booking from '../components/Booking'
const useStyles = makeStyles(theme =>({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop:theme.spacing(2)
    },
  }));
export default function Main(props){
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <MenuList className={classes.paper}/>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Overview />
          <Booking cakes={props.cakes}/>
        </Grid>
    </Grid>
    )
}