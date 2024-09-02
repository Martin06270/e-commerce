"use client"

import { useState } from 'react'


const jeu = () => {
  
  const [number,setNumber] = useState (0)
//   const increment = () =>{
//     alert('vous avez clique sur le bouton !')
//   }
  const increment = () =>{
    setNumber(number + 1)
     }

  const decrement = () =>{
    setNumber(number - 1)
    }
  
    return (


    <section>
      <div>{number}</div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </section>
  )
}

export default jeu