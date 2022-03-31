import React, { useState } from 'react';
import data from './data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = () => {
  const [expand, setExpand] = useState(false)


  const exp = index => {
    if (expand === index) {
      return setExpand(null)
    } else {
      return setExpand(index)
    }
  }

  return (
    <main>

      <div className='container'>

        <h1>FAQ</h1>
        
        <section className="info">
          {data.map((que, index) => { 
            return (
                <section>
          <div className='question'>
            <header>
              <h4 >{que.title}</h4>
              <button className='btn' onClick={()=> exp(index)} key={index}>{expand === index? <AiOutlineMinus />: <AiOutlinePlus /> }</button>
            </header>
            <p>{expand === index && que.info}</p>
          </div>
          
        </section>
            )
          })} 
        </section>

      </div>

  </main>
  )
}
// const Question = (question) => {
//   const [expand, setExpand] = useState(false)
//   const {id, title, info} = question
  

//   const exp = ((id) => {
//     if (expand) {
//       setExpand(false)
//     } else {
//       setExpand(true)
//     }
//  })


//   return (
        // <section>
        //   <div className='question'>
        //     <header>
        //       <h4 >{title}</h4>
        //       <button className='btn' onClick={(id)=> exp()}>{expand? <AiOutlineMinus />: <AiOutlinePlus /> }</button>
        //     </header>
        //     <p>{expand? info: null}</p>
        //   </div>
          
        // </section>
      
  
//       )}

export default Question;
