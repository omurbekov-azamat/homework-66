import React, {useState} from 'react';
import ButtonSpinner from "../Spinner/ButtonSpinner";
import {GotMeal} from "../../types";

interface Props {
  onSubmit: (meal: GotMeal) => void;
  isLoading?: boolean;
  existingFood?: GotMeal;
  isEdit?: boolean;
}

const initialState: GotMeal = {
  category: '',
  description: '',
  calories: '',
};

const MainForm: React.FC<Props> = ({
                                     onSubmit,
                                     isLoading = false,
                                     existingFood = initialState,
                                     isEdit = false
                                   }) => {

  const [food, setFood] = useState<GotMeal>(existingFood);

  const onDishChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFood(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(food);

    setFood({
      category: '',
      description: '',
      calories: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='mt-5'>
        <h4 className='mb-5 text-center'>{isEdit ? 'Edit Meal' : 'Add new Meal'}</h4>
        <div className='mb-4'>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className='form-control mt-2'
            value={food.category}
            onChange={onDishChange}
            required
          >
            <option value="">Choose category</option>
            <option value="breakfast">Breakfast</option>
            <option value="snack">Snack</option>
            <option value="dinner">Dinner</option>
            <option value="lunch">Lunch</option>
          </select>
        </div>
        <div className='mb-4'>
          <label htmlFor="title">Meal description</label>
          <input
            placeholder='description'
            id='description'
            name='description'
            type="text"
            className='form-control mt-2'
            value={food.description}
            onChange={onDishChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="content">Calories</label>
          <input
            placeholder='calories'
            id='calories'
            name='calories'
            type="text"
            className='form-control mt-2'
            value={food.calories}
            onChange={onDishChange}
            required
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            disabled={isLoading}
            className='btn btn-info'
          >
            {isLoading && <ButtonSpinner/>}
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default MainForm;