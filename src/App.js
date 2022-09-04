import './App.css';
import React , {Component} from 'react';
//import Register from "./FormControl/Register";
import Register from "../src/FormControl/Register";
//import Greet from "./FormControl/Greet";
import Greet from "../src/FormControl/Greet";
import { GoogleComponent } from 'react-google-location'; 
import axios from "axios";
const API_KEY = "AIzaSyCgG00TpODh3b19T91e1sEiBGx2rPOVBWg";



 class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isRegister: false,
       userID: null,
       ID: null,
       title:null,
       body:null,
       place: null,
       

    };
  }
  

  registrationHandler = (event) =>{
    console.log(event.target);
    const userID =  event.target.userID.value;
    const ID =  event.target.ID.value;
    const title = event.target.title.value;
    const body =  event.target.body.value;
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      userID,
      ID,
      title,
      body
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    this.setState({title,body,userID, isRegister: true });
    event.preventDefault();
    };
   

  render() {
    return <div className="ren">
       {this.state.isRegister ? ( 
       <Greet></Greet> 
       ) : (
       <Register submit={this.registrationHandler}></Register>
      )}

        <GoogleComponent
         
         apiKey={API_KEY}
         language={'en'}
         country={'country:in|country:us'}
         coordinates={true}
        // locationBoxStyle={'custom-style'}
         //locationListStyle={'custom-style-list'}
         onChange={(e) => { this.setState({ place: e }) }} />
         <br />
         <br />
         <h3 className="mistake cl-red">UNFORTUNATELY MAP FUNCTION IS NOT WORKING PROPERLY</h3>
         <br />
         <br />
         <br />
         
    </div>
  }
}

export default App
