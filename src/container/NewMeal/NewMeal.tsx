import React from 'react';
import MainForm from "../../components/MainForm/MainForm";
import {GotMeal} from "../../types";

const NewMeal = () => {

  const onNewSubmit = (meal: GotMeal) => {
    console.log(meal);
  };

  return (
    <>
     <MainForm onSubmit={onNewSubmit}/>
    </>
  );
};

export default NewMeal;