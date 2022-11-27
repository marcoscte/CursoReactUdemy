import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en FirstApp.jsx', () => {

  const title = "Hola, soy Naruto!";
  const subTitle = "Hola perros";

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} subTitle={subTitle} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar el texto Hola, soy Naruto!', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();



  });


  test('debe mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);



  });

  test('debe enviar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subtitle={subTitle}/>);
    expect(screen.getAllByText(subTitle).length).toBe(2);



  });


})