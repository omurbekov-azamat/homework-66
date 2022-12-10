import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import MainForm from "../../components/MainForm/MainForm";
import {GotMeal} from "../../types";

const NewMeal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onNewSubmit = async (meal: GotMeal) => {
    try {
      setLoading(true);
      await axiosApi.post('/calories.json', meal);
    } finally {
      setLoading(false);
      navigate('/');
    }
  };

  return (
    <>
     <MainForm onSubmit={onNewSubmit} isLoading={loading}/>
    </>
  );
};

export default NewMeal;