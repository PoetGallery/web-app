import React from 'react';
import Layout from './components/Layout/Main'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Option from './pages/Option';
import SignUp from './pages/SignUp';
import Rooms from './pages/Rooms';
import Archetypes from './pages/Archetypes';
import NoPage from './pages/NoPage';

function App() {
  return (
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/option" element={<Option/>}/>
            <Route path="/signup/:type" element={<SignUp/>}/>
            <Route path="/rooms" element={<Rooms/>}/>
            <Route path="/archetypes" element={<Archetypes/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
  );
}

export default App;
