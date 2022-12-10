import React, {useCallback, useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import {GotMealApi, GotMealList} from "../../types";
import Cards from "../../components/Card/Cards";

const Home = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState<string>('');
    const [food, setFood] = useState<GotMealApi[]>([]);

    const fetchFood = useCallback(async () => {
        try {
            setLoading(true);
            const foodResponse = await axiosApi.get<GotMealList>('/calories.json');
            if (foodResponse.data) {
                const food = Object.keys(foodResponse.data).map(key => {
                    const meal = foodResponse.data[key];
                    meal.id = key;
                    return meal;
                });
                setFood(food);
            } else {
                setFood([]);
            }
        } finally {
            setLoading(false);
        }
    },[]);

    useEffect(() => {
        if(location.pathname === '/') {
            fetchFood().catch(console.error);
        }
    }, [fetchFood, location]);

    if(loading) {
        return (
            <Spinner/>
        )
    }
    const deleteOneMeal = async (id: string) => {
        try {
            setDeleteLoading(id);
            await axiosApi.delete('/calories/' + id + '.json');
        } finally {
            fetchFood().catch(console.error);
        }
    };

  return (
    <>
      <div className='d-flex justify-content-between mt-4'>
        <p>Total calories: </p>
        <Link to='/new-meal' className='btn btn-primary'>Add new meal</Link>
      </div>
        <Cards infoFromApi={food} onDelete={deleteOneMeal} removedIdItem={deleteLoading}/>
    </>
  );
};

export default Home;