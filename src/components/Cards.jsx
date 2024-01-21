import React, { useContext } from 'react'

const Cards = ({id, url, name}) => {
  return (
    <section className='shadow-md w-[250px] h-[200px] bg-[#fafafa] mx-3 my-3'>
      <div>
        <img src={url} className='w-[230px] h-[150px] object-cover'></img>
        <p>{name}</p>
      </div>
    </section>
  )
}

export default Cards