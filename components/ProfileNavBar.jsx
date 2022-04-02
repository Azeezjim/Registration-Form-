/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import Link from "next/link";
import BookmarkClick from "./BookmarkClick";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { BiHistory, BiUserCircle } from "react-icons/bi";
import { BsBookmark, BsListStars } from "react-icons/bs";
import {
  MdWifiCalling,
  MdOutlinePayment,
  MdOutlineContactSupport,
} from "react-icons/md";
import { VscReferences } from "react-icons/vsc";
import { FaSuitcase } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";

function ProfileNavItem() {
  const [showBookmark, setShowBookmark] = useState(false);
  const handleClick = () => setShowBookmark(!showBookmark);

  return (
    <div className="mt-16 w-1/6">
      <div className="pr-5 py-5 block bg-white rounded shadow-sm">
        <div className="space-y-3 ml-5 font-semibold">
          <span className="flex cursor-pointer space-x-4">
            <RiBarChartHorizontalFill className="mt-1 font-semibold"/>
            <p>Dashboard</p>
          </span>
          <span className="flex space-x-4 cursor-pointer">
            <BiUserCircle className="mt-1 font-semibold" />
            <p>Profile</p>
          </span>
          <span className="flex space-x-4 cursor-pointer">
            <BiHistory className="mt-1 font-semibold" />
            <p>Stories</p>
          </span>

          <span className="flex space-x-4 cursor-pointer" onClick={handleClick}>
            <BsBookmark className="mt-1 font-semibold" />
            <p>Bookmarks</p>
          </span>
          {showBookmark && (
            <BookmarkClick className="absolute  top-5 right-0" />
          )}

          <span className="flex space-x-4 cursor-pointer">
            <MdWifiCalling className="mt-1 font-semibold" />
            <p>Calls</p>
          </span>

          <span className="flex space-x-4 cursor-pointer">
            <BsListStars className="mt-1 font-semibold" />
            <p>Lists</p>
          </span>
          <span className="flex space-x-4 cursor-pointer">
            <VscReferences className="mt-1 font-semibold" />
            <p>Referrals</p>
          </span>
          {/* <Link href="/market" replace> */}
            {/* <a> */}
              <span className="flex space-x-4 cursor-pointer">
                <FaSuitcase className="mt-1 font-semibold" />
                <p>Marketing</p>
              </span>
            {/* </a> */}
          {/* </Link> */}
          <span className="flex space-x-4 cursor-pointer">
            <MdOutlinePayment className="mt-1 font-semibold" />
            <p>Payments</p>
          </span>
          <span className="flex space-x-4 cursor-pointer">
            <GrShieldSecurity className="mt-1 font-semibold" />
            <p>Security</p>
          </span>
          <span className="flex space-x-4 cursor-pointer">
            <MdOutlineContactSupport className="mt-1 font-semibold text-base" />
            <p>Help and Support </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileNavItem;
