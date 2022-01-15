import React from 'react';
import Layout from './components/Layout/Main'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import NoPage from './pages/NoPage';

function App() {
  return (
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
  );
}

export default App;
