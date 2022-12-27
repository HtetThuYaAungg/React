import React,{useState} from 'react'
import Todo1 from './components/Todo1'
import './App.css';
import Todo  from './components/Todo';
import Counter from './components/Counter';
import ShowName from './components/ShowName';
import FaqItem from './components/FaqItem';
const App = () => {

  const[faqLists,setFaqList] = useState([
    {
      id : 1,
      question : "Question 1",
      answer : "Answer 1",
    },
    {
      id : 2,
      question : "Question 2",
      answer : "Answer 2",
    },
    {
      id : 3,
      question : "Question 3",
      answer : "Answer 3",
    },
    {
      id : 4,
      question : "Question 4",
      answer : "Answer 4",
    },
  ]);
  return (
    <>
    
     {faqLists.map((faqList)=>(
      <FaqItem key={faqList.id} faqList={faqList} />
    ))}
    </>

  )
}

export default App