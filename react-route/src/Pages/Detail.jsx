import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Detail = ({ }) => {
  
  const meal = useLocation().state.meal;
  return (
      <>
        <div className="container my-3">
              <Link to='/'>
              <button className="btn btn-primary btn-sm">Back</button>
              </Link>
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} style={{width:"200px",height:"100px"
      } } />
      </div>
      </>
  )
}

export default Detail