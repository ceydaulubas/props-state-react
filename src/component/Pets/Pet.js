import React from 'react'
import './Pet.css'

/* First way; Functional component with destructuring of props */
/*
const Pet = (props) => {
   const onClickHandlerForPet = () => props.onClickHandler(props.pet);
   
    return (
        <article>
        <h3>Id # {props.pet.id}</h3>
        <p>Name: {props.pet.name}</p>
        <p>Type: {props.pet.type}</p>
         <button onClick={onClickHandlerForPet}>Select Pet</button>
      </article>
    )
}
*/

/* Second way;  Functional component with props object */
// const {pet}=props


const Pet = ({ pet, onClickHandler }) => {
  const onClickHandlerForPet = () => onClickHandler(pet);

  return (
    <article className="pet-container">
      <h3>Id # {pet.id}</h3>
      <p>Name: {pet.name}</p>
      <p>Type: {pet.type}</p>
      <button onClick={onClickHandlerForPet}>Select Pet</button>
    </article>
  );
};


/* Class component with props */
// this should be used because of class component
//  class Pet extends React.Component {  
//   onClickHandlerForPet = () => this.props.onClickHandler(this.props.pet);

//   render() {
//     return (
//       <article className="pet-container">
//         <h3>Id # {this.props.pet.id}</h3>
//         <p>Name: {this.props.pet.name}</p>
//         <p>Type: {this.props.pet.type}</p>
//         <button onClick={this.onClickHandlerForPet}>Select Pet</button>
//       </article>
//     );
//   }
// }


export default Pet;