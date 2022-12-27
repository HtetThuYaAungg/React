import React from 'react'

const ListItem = ({list}) => {
  
  const isdone = list.isDone ? "text-decoration-line-through" : ""

  return (
    <div>
        <li className='list-group-item'>
          <div className="d-flex align-items-center">
            <input 
            onChange={()=>console.log("change")} 
            type="checkbox" checked={list.isDone} 
            className="form-check-input me-2" 
            />
            <span className={`${isdone} fw-bold`}>{list.text}</span>
            <button className="btn btn-sm btn-danger ms-auto">Delete</button>
          </div>
        </li>
    </div>
  );
}

export default ListItem