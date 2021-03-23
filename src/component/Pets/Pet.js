import React from 'react'
import './Pet.css'

/* First way; Functional component with destructuring of props */
/*
const Pet = (props) => {
    return (
        <article>
        <h3>Id # {props.pet.id}</h3>
        <p>Name: {props.pet.name}</p>
        <p>Type: {props.pet.type}</p>
      </article>
    )
}
*/

/* Second way;  Functional component with props object */
// const {pet}=props

/*
const Pet = ({pet}) => {
    return (
        <article>
        <h3>Id # {pet.id}</h3>
        <p>Name: {pet.name}</p>
        <p>Type: {pet.type}</p>
      </article>
    );
};
*/

/* Class component with props */
// this should be used because of class component
 class Pet extends React.Component {  
  render() {
    return (
      <article className="pet-container">
        <h3>Id # {this.props.pet.id}</h3>
        <p>Name: {this.props.pet.name}</p>
        <p>Type: {this.props.pet.type}</p>
      </article>
    );
  }
}


export default Pet;