import React from 'react'
import Image from 'next/image'

const addTodo = () => {
  return (
    <div>
        <form action="" className='flex items-center w-full gap-x-2 mb-4 mx-3 px-2'>
            <input type="text" name="todo" placeholder='write a new text'
            className='w-full rounded-full px-3 py-3 border focus:outline-secondary' 
             />
            <button type="submit" className='bg-gradient-to-b from-primary to-secondary shrink-0 px-3 py-3 rounded-full'>
                <Image src={'/Vector.png'} width={25} height={25} alt='send icon'></Image>
            </button>
        </form>
    </div>
  )
}

export default addTodo