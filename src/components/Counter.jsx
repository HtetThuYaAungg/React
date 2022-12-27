import React,{useState} from 'react'

function Counter() {

    const[count,setCount] = useState(0);
    const substract = () => {
        if (count>0){
            setCount(count-1);
        }
    }
    const add = () =>{
        setCount(count+1);
    }
  return (
    <div className='d-flex border m-3 p-3  align-items-center'>
        <h1 className='me-auto mb-0'>Counter : {count}</h1>
        <button onClick={substract} className='btn btn-primary me-2'>-</button>
        <button  onClick={add} className='btn btn-primary'>+</button>
    </div>
  )
}

export default Counter