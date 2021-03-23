
import { Component } from 'react';
import './App.css';

import PetList from '../Pets/PetList'


const nestedPetList = [
  {
    id: 1,
    name: "Whiskers",
    type: "Cat",
  },
  {
    id: 2,
    name: "Goofy",
    type: "Dog",
  },
  {
    id: 3,
    name: "Alvin",
    type: "Chipmunk",
  },
];


/* Class Component */

class App extends Component{
  render(){
    return(
      <section className="app">
        <h1>Props</h1>
        <div className="container">
        <PetList  nestedPetListFromApp ={nestedPetList} />
        </div>
        <h1>State</h1>
        <div className="container">

          
        </div>
      </section>
    )
  }
}

export default App;
