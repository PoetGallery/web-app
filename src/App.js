import React from 'react';
import {Grommet} from 'grommet';
import theme from './theme';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import NoPage from './pages/NoPage';

function App() {
  return (
      <Grommet theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
      </Grommet>
  );
}

export default App;
