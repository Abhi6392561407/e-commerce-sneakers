import React from 'react'

export default function Input({handleChange,value,title,name,color}) {
  return (
    <div>
     
        <label className='sidebar-label-container'>
            <input onChange ={handleChange} type='redio'value={value} name={name}/>
            <span className='checkmark' style={{backgroundColor:color}}></span>All
        </label>
      
    </div>
  )
}


