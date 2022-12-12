import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import MainForm from "../../components/MainForm/MainForm";
import {GotMeal, GotMealApi} from "../../types";

const EditMeal = () => {
  const {id} = useParams();
  const [food, setFood] = useState<GotMealApi | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOneFood = useCallback(async () => {
    try {
      const foodResponse = await axiosApi.get<GotMealApi>('/calories/' + id + '.json');
      setFood(foodResponse.data);
    } finally {
    }
  }, [id]);

  useEffect(() => {
    fetchOneFood().catch(console.error);
  }, [fetchOneFood]);

  const updateFood = async (item: GotMeal) => {
    try {
      setLoading(true);
      await axiosApi.put('/calories/' + id + '.json', item);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {food && (
        <MainForm onSubmit={updateFood} isLoading={loading} existingFood={food}/>
      )}
    </>
  );
};

export default EditMeal;