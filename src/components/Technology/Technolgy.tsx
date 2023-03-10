import React from 'react'

function Technolgy(props:any) {
  return (
    <div className='technology h-7 w-7'>
        <img src={props.tech} alt="this is nice" />
    </div>
  )
}

export default Technolgy