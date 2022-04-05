import React from 'react';
import PropTypes from 'prop-types';

//FC
// const saludo = 'Hola mundo'


const PrimeraApp = ({
                    saludo,subtitulo,
                }) => {

    // if (!saludo){
    //     throw new Error('El saludo es necesario');
    // }

    return (
            <>
                <h1>{saludo}</h1>
                {/* {<pre>{ JSON.stringify(saludo, null, 2) }</pre>} */}
                <p>{subtitulo}</p>
            </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo'
}

export default PrimeraApp;