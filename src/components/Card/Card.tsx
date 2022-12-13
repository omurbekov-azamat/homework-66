import React from 'react';
import {Link} from "react-router-dom";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import {GotMealApi} from "../../types";

interface Props {
  infoFromApi: GotMealApi;
  onDelete: React.MouseEventHandler;
  isLoading?: boolean;
}

const Card: React.FC<Props> = ({infoFromApi, onDelete, isLoading = false}) => {
  return (
    <div className="card mt-3">
      <div className="card-body text-capitalize">
        <div className='d-flex justify-content-between'>
          <div>
            <h5 className="card-title">{infoFromApi.category}</h5>
            <h6 className="card-subtitle mb-2 text-muted">meal: {infoFromApi.description}</h6>
            <p className="card-text">{infoFromApi.calories} calories</p>
          </div>
          <div className='d-flex flex-column justify-content-around'>
            <Link
              to={'/edit-meal/' + infoFromApi.id}
              className='btn btn-info'
            >
              Edit
            </Link>
            <button
              disabled={isLoading}
              className='btn btn-danger'
              onClick={onDelete}
            >
              {isLoading && <ButtonSpinner/>}
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;