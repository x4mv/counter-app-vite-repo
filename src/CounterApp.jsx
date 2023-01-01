import {useState} from 'react'
import PropTypes from 'prop-Types'



export const CounterApp = ({value}) => {
    
    console.log('render');



    const [counter, setCounter] = useState(value) 



    // Uso de useState
    const addCounter = ( ) => setCounter(counter + 1);
    const diminish = () => setCounter(counter - 1 );
    const reset = () => setCounter(value);


    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={addCounter}>+1</button>            
            <button onClick={diminish}>-1</button>
            <button aria-label="btn-reset" onClick={reset}>Reset</button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
