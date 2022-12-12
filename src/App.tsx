import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Routes, Route} from "react-router-dom";
import Home from "./container/Home/Home";
import NewMeal from "./container/NewMeal/NewMeal";
import EditMeal from "./container/EditMeal/EditMeal";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-meal' element={<NewMeal/>}/>
          <Route path='/edit-meal/:id' element={<EditMeal/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
