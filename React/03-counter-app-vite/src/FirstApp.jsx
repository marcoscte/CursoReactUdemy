//Fragmento explicito
// import React, { Fragment } from 'react';
// export const FirstApp = () => {
//   return (
//     <Fragment>
//     <h1>Hola</h1>
//     <p>subtitulo</p>
//     </Fragment>
//   )
// }

import React from 'react';
import PropTypes from 'prop-types'; //sirve para definir tipo a las propiedades que recibe el functional component


const newMessage = [1,2,3,4,5,6,7,8,9];
const objeto = {
  message : 'holamundo', //no valido para mandar directamente a html en el return
  name : 'perro'
};


const suma = (n1,n2)=>{ //Evitar poner funciones dentro del funcntional component
  return n1 + n2;
}

export const FirstApp = ({title, subtitle}) => {
//Es raro encontrar las props de manera explicita, es mas comun desestructurar

  return ( //fragmento implicito <></>
  //Siempre se debe retornar un nodo padre
  //se debe colocar expresion de js permitida que no sea un objeto 
    <>

    <h1 data-testid="test-title">{title}</h1>
    <h3>{subtitle}</h3>
    <h3>{subtitle}</h3>
    
    <p>eliud</p>
    </>
  )
}

FirstApp.propTypes = {
    title:PropTypes.string.isRequired,
    subtitle : PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subtitle : 'No hay subtitulo'
}



