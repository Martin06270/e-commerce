"use client"

import { useState } from 'react'


const jeu = () => {
  
  const [number,setNumber] = useState (0)
  const increment = () =>{
    alert('vous avez clique sur le bouton !')
  }
  
    return (


    <section>
      <div>{number}</div>
      <button onClick={() => increment()}>Increment</button>
    </section>
  )
}

export default page