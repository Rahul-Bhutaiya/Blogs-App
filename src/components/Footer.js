import React, { useContext } from 'react'
import { ApContext } from '../context/AppContext'

const Footer = () => {

  const {currentPageNo,totalPages,pageChangeHandler} = useContext(ApContext);

  return (
    <div className='w-full fixed bottom-0 border-t-2 border-t-gray-300  bg-white py-2'>
      <div className='flex items-center justify-between w-11/12 max-w-2xl mx-auto'>

        <div className='flex gap-x-3 '>
          {
            currentPageNo>1 &&
              <button 
                className='border-2 border-gray-300 py-1 px-4 rounded-md'
                onClick={()=>pageChangeHandler(currentPageNo-1)}>
                Previous
              </button>
          }

          {
            currentPageNo<totalPages && 
              <button 
                className='border-2 border-gray-300 py-1 px-4 rounded-md'
                onClick={()=>pageChangeHandler(currentPageNo+1)}>
                Next
              </button>
          }
        </div>

        <p className='font-semibold text-sm'>Page {currentPageNo} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Footer