import React from 'react'

const RecoomendVideoCard = () => {
  return (
    <div className='flex cursor-pointer'>
        {/* Video */}
      <div className='bg-gray-200 w-44 h-24 rounded-md mr-2'>
        <img src="" alt="" />
      </div>

      {/* info */}
      <div className='flex flex-col'>
        <h4 className='text-sm font-semibold'>Going to CHINA 🇨🇳 on BULLET TRAIN</h4>
        <span className='text-sm'>yatri doctor</span>
        <span className='text-sm'>29K views 2 hours ago</span>
      </div>
    </div>
  )
}

export default RecoomendVideoCard
