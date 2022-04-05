import React, {useState} from 'react';
import PropTypes from 'prop-types';

//si pongo la funcion habdleAdd con parentesis cuando js llegue a la linea lo va 
//a ejecutar despues del renderizado, si lo dejo sin parentesis lo ejecuta antes
//del renderizado, si necesito que el onclick despues del renderizado haga alguna funcion
//en especifico ahi si agregarle los parentesis

const CounterApp = ({value = 10}) => {

    const [counter, counterSet] = useState(value);

    const handleAdd = () => {
        // counterSet(counter+1);
        counterSet( (c) => c+1);
    }

    const handleReset = () => counterSet(value);

    const handlesubtrac = () => counterSet(counter-1);

    return (
    <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>
    
    <button onClick={handleAdd}>+1</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handlesubtrac}>-1</button>
    </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: 123,
};

export default CounterApp;

