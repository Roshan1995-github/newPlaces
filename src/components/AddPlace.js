import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Copyright from '../components/Copyright';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default class AddPlace extends React.Component {
  //const classes = useStyles();
  
  constructor(){
    super();
    this.state = {
        name:'',
        phonenumber:'',
        description:'',
        categories:'',
        city:'',
        token:''
    }
   this.onCategoriesChanged = this.onCategoriesChanged.bind(this);
   this.onNameChanged = this.onNameChanged.bind(this);
   this.onPhoneChanged = this.onPhoneChanged.bind(this);
   this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
   this.onCityChanged = this.onCityChanged.bind(this);
   this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let opts = {
        "name":this.state.name,
        "description":this.state.description,
        "city":this.state.city,
        "categories":this.state.categories,
        "phonenumber":this.state.phonenumber
      }
let token = localStorage.getItem("token")
      fetch('http://rest-api-wanmuz.herokuapp.com/api/places', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+token
    },
    body: JSON.stringify(opts)
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data)
//     if (data.success==true){
// let token = data.token.split(" ")[1]
// console.log(token)
// localStorage.setItem("token",token)
// this.setState({
//   token:token
 })
     
  }
  onCategoriesChanged(evt){
      this.setState({
        categories:evt.target.value
    })
  }

  onNameChanged(evt){
    this.setState({
        name:evt.target.value
    })
  }
  
  onPhoneChanged(evt){
    this.setState({
        phonenumber:evt.target.value
    })
  }
  onDescriptionChanged(evt){
    this.setState({
        description:evt.target.value
    })
  }
  onCityChanged(evt){
    this.setState({
        city:evt.target.value
    })
  }
  render(){
    if (this.state.token){
      return (
        <Redirect to={{
          pathname:"/dashboard"
        }}
        />
      );
    }
    else {
  return (
    
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div >
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add new Place
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
             value={this.state.name}
            label="Place name"
            name="name"
            autoComplete="text"
            onChange={this.onNameChanged}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={this.state.phonenumber}
            name="phonenumber"
            label="Phone Number"
            type="phone"
            id="phonenumber"
             onChange={this.onPhoneChanged}
          />
          <TextField
          margin="normal"
          required
          fullWidth
          multiline
          rows="5"
          value={this.state.description}
          name="description"
          label="Enter Description"
          type="text"
          id="description"
          onChange={this.onDescriptionChanged}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
             value={this.state.city}
            name="city"
            label="City"
            type="text"
            id="city"
            onChange={this.onCityChanged}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
             value={this.state.categories}
            name="categories"
            label="Categories"
            type="text"
            id="categories"
            onChange={this.onCategoriesChanged}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleClick}
            
          >
           Add Place
          </Button>
        
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  );
  }
}

  
}