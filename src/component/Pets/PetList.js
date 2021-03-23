//rfac :)
//Child Component 

import React from 'react'
import Pet from './Pet'

export const PetList = (props) => {
    return props.nestedPetListFromApp.map((pet) => 
    <Pet key={pet.id} pet={pet} />);
};

export default PetList;