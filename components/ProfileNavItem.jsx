import React from 'react'
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import { BiHistory, BiUserCircle } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs'

function ProfileNavItem() {
  return (
    <div className='mt-16 w-[260px] h-[90vh]'>
      <div className="p-1 block bg-white rounded shadow-sm">
        <div className='space-y-3 ml-5 font-semibold'>
          <span className="flex cursor-pointer">
            <RiBarChartHorizontalFill className='mt-1'/>
            <p>Dashboard</p>
          </span>
          <span className="flex space-x-2 cursor-pointer">
            <BiUserCircle className='mt-1'/>
            <p>Profile</p>
          </span>
          <span className="flex space-x-2 cursor-pointer">
            <BiHistory className='mt-1'/>
            <p>Stories</p>
          </span>
          <span className="flex space-x-2 cursor-pointer">
            <BsBookmark className='mt-1'/>
            <p>Bookbarks</p>
          </span>
          <span className="flex space-x-2 cursor-pointer">
            <BsBookmark className='mt-1'/>
            <p>Bookbarks</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileNavItem