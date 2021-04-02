//FC
import React from 'react';
//import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


export const PrimeraApp = ( { saludo, subtitulo } ) => {

    // const saludo = 'Hola mundo const'

/*     if ( !saludo ){
        throw new Error('El saludo es necesario')
    } */



    return (
        <>
            <h1> { saludo } </h1>
        {/* { <pre> { JSON.stringify( saludo, null, 3)}</pre> }  */}
            <p>{ subtitulo}</p>
        </>
    )
}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;