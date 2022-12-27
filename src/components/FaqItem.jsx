import React,{useState} from 'react'

function FaqItem({faqList}) {
    const [showAnswer ,setShowAnswer] = useState(false);
    const showQuestionBg = showAnswer? "bg-primary text-white" : "";
  return (
    <div className='m-3'>
        <div onClick={()=>setShowAnswer(!showAnswer)} className={` ${showQuestionBg} d-flex border border-primary rounded p-3 text-primary`}>
            {faqList.question}
            <span className={` ms-auto ${showAnswer ? 'down' : ''}`} > &gt;</span>
            </div>
       {showAnswer && (
         <div className='p-2'>
         {faqList.answer} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Voluptate nisi exercitationem molestias sint eos consectetur rerum impedit 
         asperiores ea, animi at temporibus, assumenda deserunt eligendi non. Nemo 
         commodi minima suscipit?

     </div>
       )}
    </div>
  )
}

export default FaqItem