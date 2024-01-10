import React, { useState } from 'react'
import CategoryButton from './CategoryButton'
import { YOUTUBE_API_KEY, YOUTUBE_CATEGORY_LIST_API } from '../utils/constants'
import { useEffect } from 'react';

const CategoryList = () => {

  const [active, setActive] = useState(0);
  const [category, setCategory] = useState(null)

  useEffect(()=>{
    fetchCategoryList();
  },[])

  const fetchCategoryList = async ()=>{
    const data = await fetch(YOUTUBE_CATEGORY_LIST_API+YOUTUBE_API_KEY);
    const json = await data.json();
    setCategory(json.items);
    // console.log("category is", category);
  }

  return (
    <div className='w-full flex space-x-3 scrollbar-hide overflow-y-hidden overflow-x-scroll pt-3 pb-9 sticky top-0 px-5 whitespace-nowrap'>
      {category?.map((category,index)=><CategoryButton 
      key={index+Math.random()*10}
      categoryData={category} 
      index={index}
      active={active}
      setActive={()=>{setActive(index)}}
      />)}
    </div>
  )
}

export default CategoryList
