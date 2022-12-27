import React from 'react'
import Input from './Input';
import ListItem from './ListItem';
import StatusBar from './StatusBar';

const Todo = () => {

  const lists =[
    {
      id:1,
      text:'to read book',
      isDone:true
    },
    {
      id:2,
      text:'to read Javascript',
      isDone:false
    },
    {
      id:3,
      text:'to read Php',
      isDone:true
    },
    {
      id:4,
      text:'to read Java',
      isDone:false
    }
  ]

  return (
    <div className='p-3'>
        <h1>To Do</h1>
        <Input/>
        <hr/>
        <StatusBar lists={lists}/>
        <ul className='list-group'>
           { lists.map((list) => (
            <ListItem list={list} key={list.id}/>
           ))}
           
        </ul>
    </div>
  )
}

export default Todo
