import React from 'react'
import { RiBarChartHorizontalFill } from 'react-icons/ri'

function ProfileNavItem() {
  return (
    <div className='mt-20 w-[260px] h-[90vh]'>
      <div className="p-1 block bg-white rounded shadow-sm">
        <div className='flex '>
          <span className="flex space-x-2 cursor-pointer">
            <RiBarChartHorizontalFill className='mt-1'/>
            <p>Dashboard</p>
          </span>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileNavItem