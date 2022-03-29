import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({id, title, info}) => {
  const [expand, setExpand] = useState(false)

  return (
        <section key={id}>
          <div className='question'>
            <header>
              <h4 >{title}</h4>
              <button className='btn' onClick={()=> setExpand(!expand)}>{expand? <AiOutlineMinus />: <AiOutlinePlus /> }</button>
            </header>
            <p>{expand && info}</p>
          </div>
          
        </section>
      
  
      )}

export default Question;
