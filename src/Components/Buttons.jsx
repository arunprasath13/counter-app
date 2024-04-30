import React from 'react'

const Buttons = ({increment,decrement}) => {
  return (
    <div className="flex justify-center">
      <button className='p-3 bg-lime-500 rounded-2xl m-2' onClick={increment}>Increment</button>
      <button className='p-3 bg-red-500 rounded-2xl m-2' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Buttons
