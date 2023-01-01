import {  render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('pruebas en FirstApp', () => { 
    
/* test('Debe de hacer match con el snapshot', () => { 

        const title = 'sergio'
        const { container, getByText } = render( <FirstApp title={ title}/> )
        
        expect( container ).toMatchSnapshot();

    });
 */


    test('Dede de mostrar el titulo en un h1', () => { 

        const title = 'Sergio'
        const { container, getByText, getByTestId } = render( <FirstApp title={ title}/> )
        expect(getByText(title) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML).toContain(title);



    });


    test('Dede de mostrar el subtitulo enviado por props', () => { 

        const title = 'Sergio'
        const subTitle = 'El es un estudiante de la UNA'
        const { getAllByText } = render( 
        <FirstApp
            title={ title}
            subTitle={subTitle}
        />
        );

        // expect(getByText(subTitle) ).toBeTruthy();

        // si hay mas de una coincidencia te trae la cantidad que son 

        expect( getAllByText(subTitle).length).toBe(3)

        



    });
});