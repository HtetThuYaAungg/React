import React from "react";
import { Link } from "react-router-dom";

const Card = ({meal}) => {
  return (
      <>
          
      <div className="card" >
              <img className="card-img-top" style={{ width: "150px",height:"200px"}} src={meal.strMealThumb} alt="Card image cap" />
        <div className="card-body">
                  <h5 className="card-title" style={{width:"250px"}}>{ meal.strMeal}</h5>
                  <Link to={`/detail/${meal.idMeal}` } state={{meal}}>
                   <button className="btn btn-primary">
            Detals
          </button>
                  </Link>
         
        </div>
      </div>
    </>
  );
};

export default Card;