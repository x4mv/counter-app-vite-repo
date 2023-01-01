import {  render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('pruebas en FirstApp', () => { 

    const title = 'Hola soy Sergio';
    const subtitle = 'Es un subtitulo'

    test('Hacaer match con el snapshot', () => { 
        const { container } = render(<FirstApp title = {title}/>);
        expect( container ).toMatchSnapshot();
    });


    test('debe de mostrar el mensaje "Hola, soy Sergio"', () =>{
        render( <FirstApp title={ title }/>);

        expect(screen.getByText(title)).toBeTruthy();
        // screen.debug(); para ver el obj
        
    });

    test('Debe de mostrar el titulo en un h1', () => { 
        render( <FirstApp title={title}/>)
        expect( screen.getByRole('heading', {level: 1 }).innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => { 
        
        render( <FirstApp 
            title={ title }
            subtitle={subtitle}
        />);

        expect( screen.getAllByText(subtitle).length).toBe(3)


    });
});