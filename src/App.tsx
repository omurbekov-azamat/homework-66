import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Routes, Route} from "react-router-dom";
import Home from "./container/Home/Home";
import MultiContainer from "./container/MultiContainer/MultiContainer";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-meal' element={<MultiContainer/>}/>
          <Route path='/edit-meal/:id' element={<MultiContainer/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
