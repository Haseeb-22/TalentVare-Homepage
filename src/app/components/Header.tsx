import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-white text-black py-4 px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={45}
              height={45}
              className="mr-8"
            />
          </Link>
          <div className="flex space-x-4">
            <Link href="" className="text-[#0154AA] text-[16px] font-bold">
              Find Jobs
            </Link>
            <Link href="" className="text-[#737A91] font-medium text-[16px]">
              Top Companies
            </Link>
            <Link href="" className="text-[#737A91] font-medium text-[16px]">
              Job Tracker
            </Link>
            <Link href="" className="text-[#737A91] font-medium text-[16px]">
              My Calendar
            </Link>
            <Link href="" className="text-[#737A91] font-medium text-[16px]">
              Documents
            </Link>
            <Link href="" className="text-[#737A91] font-medium text-[16px]">
              About
            </Link>
            <Link href="" className="text-[#737A91] font-medium text-[16px]">
              Messages
            </Link>
            <Link href="" className="text-[#737A91] font-medium text-[16px]">
              Notifications
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4 bg-[#F6F9FF] px-2 py-1 rounded-md text-[16px] font-medium">
            <IoSearchOutline className="text-[#737A91]" />
            <input type="text" placeholder="Search" className="bg-transparent outline-none text-black font-medium text-[14px]" />
          </div>
          <button className="bg-[#0154AA] px-4 py-1 rounded-md text-[15px] font-medium text-white">
            Resume Builder
          </button>
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
