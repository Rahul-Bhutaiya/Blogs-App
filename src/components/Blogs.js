import React, { useContext } from 'react'
import { ApContext } from '../context/AppContext'
import Loader from './Loader';

const Blogs = () => {

    const {loadingState,blogsData} = useContext(ApContext);

  return (
    <div className='w-11/12 max-w-2xl mx-auto my-[100px] flex flex-col justify-center items-center gap-y-14'>
    {
        loadingState?
        (<Loader/>):
        blogsData.length!==0?
        (
            blogsData.map((eachBlogData)=>(
                <div 
                    key={eachBlogData.id}>

                    <h2 className='font-bold text-lg hover:underline cursor-pointer'>{eachBlogData.title}</h2>
                    <p className='text-sm my-1'>By 
                        <span className='italic'>{eachBlogData.author}</span> On 
                        <span className='font-semibold underline cursor-pointer'> {eachBlogData.category}</span>
                    </p>
                    <p className='text-sm'>Posted On {eachBlogData.date}</p>
                    <p className='mt-4 mb-2'>{eachBlogData.content}</p>
                    <div className='flex flex-wrap gap-x-2 text-blue-800 text-[12px] font-semibold'>
                    {
                        eachBlogData.tags.map((eachTag,index)=>(<span className='underline' key={index}> #{eachTag}</span>))
                    }
                    </div>
                </div>
            ))
        ):(
            <h2 className='text-3xl font-bold mt-28'>No Blogs Found!</h2>
        )
    }
    </div>
  )
}

export default Blogs