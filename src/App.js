import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Button from './elements/Button';

const theme = {
  primary: 'green',
  secondary: 'red',
  alert: 'yellow',
  font: 'sans-serif'
};

const H1 = styled.h1`
  font-size: 3rem;
  font-family: ${props => props.theme.font};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='main'>
        <H1>Styled Components</H1>
        <form>
          <input type='text' />
          <button>Create</button>
          <Button color='primary'>Create</Button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default App;
