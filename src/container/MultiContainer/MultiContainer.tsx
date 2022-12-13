import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import MainForm from "../../components/MainForm/MainForm";
import {GotMeal, GotMealApi} from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const MultiContainer = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState<GotMealApi | null>(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const onNewSubmit = async (meal: GotMeal) => {
    try {
      setButtonLoading(true);
      await axiosApi.post('/calories.json', meal);
    } finally {
      setButtonLoading(false);
      navigate('/');
    }
  };

  const fetchOneFood = useCallback(async () => {
    try {
      setPageLoading(true);
      const foodResponse = await axiosApi.get<GotMealApi>('/calories/' + id + '.json');
      setFood(foodResponse.data);
    } finally {
      setPageLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchOneFood().catch(console.error);
  }, [fetchOneFood]);

  const updateFood = async (item: GotMeal) => {
    try {
      setButtonLoading(true);
      await axiosApi.put('/calories/' + id + '.json', item);
    } finally {
      setButtonLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <Spinner/>
    )
  }

  if (id) {
    return (
      <>
        {food && (
          <MainForm onSubmit={updateFood} isLoading={buttonLoading} existingFood={food} isEdit/>
        )}
      </>
    );
  } else {
    return (
      <>
        <MainForm onSubmit={onNewSubmit} isLoading={buttonLoading}/>
      </>
    );
  }
};

export default MultiContainer;