import axios from 'axios'
import React from 'react'

const Display = () => {
  let data = ()=>{
    let url = "http://localhost:3000/cutomer"
    axios.get(url).then((res)=>{console.log(res.data);
    })

  }
  return (
    
   <>
   
   {data}
   
   
   </>
  )
}

export default Display