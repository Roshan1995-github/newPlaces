import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles(theme =>({
    root: {
      minWidth: 275,
      marginTop:theme.spacing(2)
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginTop:10,
        color: theme.palette.text.secondary,
      },
      spacing: {
        marginTop:theme.spacing(2)
      }
  }));
  const data = [{
      item:"Place",
      number:100
  },
  {
    item:"Revenue",
    number:10000
},
{
    item:"Monthly Users",
    number:20000
},
{
    item:"Online",
    number:53
}]
export default function Overview(){
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
           Overview
          </Typography>
          <Divider/>
          <Container className={classes.spacing}>
          <Grid container spacing={3}>
              {
                  data.map(val=>(
                    <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                    <Typography variant="h5" component="h2">
           {val.item}
          </Typography>
          <Typography variant="h5" component="p">
           {val.number}
          </Typography>
                    </Paper>
                  </Grid>
                  ))
              }
            </Grid>
            </Container>
        </CardContent>
      </Card>
        )
}