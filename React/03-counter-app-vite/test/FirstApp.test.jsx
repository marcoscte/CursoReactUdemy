import {render} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';


describe('Pruebas en FirstApp.jsx', ()=>{
    // test('debe hacer match con el snapshot', () => { 
    //     const title = 'Hola putos'
    //     const {container} = render(<FirstApp title={title}/>);

    //     expect(container).toMatchSnapshot();


    //  });

     test('debe mostrar titulo en h1', () => { 
        const title = 'Hola putos'
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(title);



      });

      test('debe el subtitulo enviado por props', () => { 
        const title = 'Hola putos'
        const subTitle = 'Hola prros'
        const {getByText} = render(
        <FirstApp title={title} subTitle={subTitle}/>);
        
        expect(getByText).toBeTruthy();
      });


      // test('debe mostrar titulo en h1', () => { 
      //   const title = 'Hola putos'
      //   const {container, getByText} = render(<FirstApp title={title}/>);
      //   const h1 = container.querySelector('h1');
      //   expect(h1.innerHTML).toBe(title);
      // });
})