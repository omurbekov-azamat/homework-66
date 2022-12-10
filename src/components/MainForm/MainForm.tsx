import React from 'react';

const MainForm = () => {

  return (
    <form>
      <div className='mt-5'>
        <h4 className='mb-5 text-center'>Add new Meal</h4>
        <div className='mb-4'>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className='form-control mt-2'
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
            placeholder='meal'
            id='meal'
            name='meal'
            type="text"
            className='form-control mt-2'
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
            required
          />
        </div>
        <div className='text-center'>
          <button className='btn btn-info'>Save</button>
        </div>
      </div>
    </form>
  );
};

export default MainForm;