import React from 'react';
import {GotMealApi} from "../../types";
import {Link} from "react-router-dom";

interface Props{
    infoFromApi: GotMealApi;
}
const Card: React.FC<Props> = ({infoFromApi}) => {
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
                            <Link to={'/'} className='btn btn-info'>Edit</Link>
                            <Link to={'/'} className='btn btn-danger'>Delete</Link>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default Card;