import { CounterApp } from "../src/CounterApp";
import {  fireEvent, render, screen } from "@testing-library/react"
import { element } from "prop-types";

describe('Pruebas en el componente CounterApp', () => { 

    const inicial = 100;
    
    test('Debe de hacer match con el snapshot', () => { 
        
        const {container} = render(<CounterApp value={inicial}/>);
        expect(container).toMatchSnapshot();
    });


    test('Debe de mostrar el valor inicial de 100', () => { 

        render( <CounterApp 
            value={100}
        />);

        expect(screen.getByText(100)).toBeTruthy();
    });


    test('Debe incrementar con el boton +1', () => {

        render(<CounterApp value={inicial}/>);
        fireEvent.click( screen.getByText('+1'));

        expect(screen.getByText('101')).toBeTruthy();
    });


    
    test('Debe decrementar con el boton -1', () => {

        render(<CounterApp value={inicial}/>);
        fireEvent.click( screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
        // screen.debug();
    });

    test('Debe de funcionar el boton de reset', () => {

        render(<CounterApp value={inicial}/>);
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        //fireEvent.click( screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        
        expect(screen.getByText(inicial)).toBeTruthy();


        // screen.debug();
    });


});