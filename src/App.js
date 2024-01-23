import { Route, Routes } from 'react-router-dom';
import reset from "styled-reset";
import Main from './pages/Main';
import { createGlobalStyle } from 'styled-components';
import './styles/index.css'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  .cusor--pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      
      <Routes>
        <Route>
          <Route index element={<Main />} />

        </Route>
      </Routes>
    
    </>
  );
}

export default App;
