import React from 'react'
import ViewBookDetail from '../Components/ViewBookDetail'
import ViewReview from '../Components/ViewReview'

function BookDetail() {
  return (
    <>
      <div className='flex w-full'>
        <div  className='md:w-[80%] w-[70%]'>
          <ViewBookDetail/>
        </div>
        <div className='md:w-[20%] w-[30%]'>
          <ViewReview/>
        </div>
      </div>
    </>
  )
}

export default BookDetail
