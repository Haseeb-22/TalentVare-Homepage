import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { CgTime } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="flex gap-4 pl-12 pr-8 py-8">
        <div className="flex flex-col gap-2 w-[28%]">
          <div className="flex flex-col items-center justify-center rounded-xl bg-white">
            <Image
              src="/assets/cover.png"
              alt="Cover Image"
              width={100}
              height={100}
              className="rounded-t-2xl w-[346px] h-[100px]"
            />
            <div className="relative bottom-10 flex flex-col items-center">
              <Image
                src="/assets/profileimage.png"
                alt="Profile Image"
                width={86}
                height={86}
              />
              <h3 className="text-[18px] text-[#333333] font-semibold pt-2">
                Albert Flores
              </h3>
              <p className="text-[14px] text-[#333333] font-medium">
                Senior Product Designer | UI/UX{" "}
              </p>
              <p className="text-[14px] text-[#333333] font-medium">
                Designer | Graphic Designer | Web...{" "}
              </p>
              <p className="text-[12px] text-[#585D6E] font-medium">
                Clinton, Maryland{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4 px-6 rounded-xl bg-white">
            <div className="flex justify-between border-b border-b-[#E9ECEF] pb-2">
              <p className="text-[14px] font-medium text-[#333333]">
                Profile Visitors
              </p>
              <p className="text-[16px] font-medium text-[#0154AA]">140</p>
            </div>
            <div className="flex justify-between border-b border-b-[#E9ECEF] py-2">
              <p className="text-[14px] font-medium text-[#333333]">
                Resume Viewers
              </p>
              <p className="text-[16px] font-medium text-[#0154AA]">20</p>
            </div>
            <div className="flex justify-between pt-2">
              <p className="text-[14px] font-medium text-[#333333]">My Jobs</p>
              <p className="text-[16px] font-medium text-[#0154AA]">88</p>
            </div>
          </div>
          <div className="flex flex-col py-3 px-4 rounded-xl bg-white">
            <div className="flex justify-between items-center">
              <p className="flex flex-col leading-tight">
                <span className="text-[16px] text-[#333333] font-semibold">
                  My Calendar
                </span>
                <span className="text-[14px] text-[#737A91] font-medium">
                  Upcoming Interviews
                </span>
              </p>
              <IoIosArrowDown className="text-[14px] text-[#333333]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[72%]">
          <div className="pt-4">
            <p className="text-[22px] text-[#333333] font-semibold">
              Find your Dream Job,
              <span className="text-[#0154AA]"> Albert!</span>
            </p>
            <p className="text-[14px] font-medium text-[#585D6E]">
              Explore the latest job openings and apply for the best
              opportunities available today!
            </p>
          </div>
          <div className="bg-white rounded-xl px-4 py-5 flex justify-between w-full gap-20">
            <input
              type="text"
              placeholder="Job Title, Company, or Keywords"
              className="outline-none w-96"
            />
            <div className="flex space-x-2">
              <div className="flex items-center">
                <select
                  className="w-full px-4 py-2 text-[#585D6E] text-[14px] border-none outline-none "
                  defaultValue="Select Location"
                >
                  <option>Select Location</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Islamabad</option>
                  <option>Rawalpindi</option>
                </select>
              </div>

              <div className="flex items-center">
                <select
                  className="w-full px-4 py-2 text-[#585D6E] text-[14px] outline-none border-none"
                  defaultValue="Job Type"
                >
                  <option>Job Type</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>
              <button className="bg-[#0154AA] px-4 py-1 rounded-md text-[15px] font-medium text-white flex items-center gap-2">
                <IoSearchOutline className="text-white" />
                Search
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[#737A91] text-[14px]">Similar:</p>
            <button className="bg-transparent px-4 py-1 rounded-md text-[12px] font-medium text-[#737A91] border border-[#737A91]">
              Frontend
            </button>
            <button className="bg-transparent px-4 py-1 rounded-md text-[12px] font-medium text-[#737A91] border border-[#737A91]">
              Backend
            </button>
            <button className="bg-transparent px-4 py-1 rounded-md text-[12px] font-medium text-[#737A91] border border-[#737A91]">
              Graphic Designer
            </button>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[#333333] text-[18px]">Featured Jobs</p>
            <p className="text-[#0154AA] text-[14px] underline">
              See Featured Jobs
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="p-2 bg-white rounded-xl">
              <p className="text-[10px] text-[#333333] font-semibold">
                Promoted
              </p>
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <p className="text-[10px] text-[#333333] font-semibold">
                Promoted
              </p>
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <p className="text-[10px] text-[#333333] font-semibold">
                Promoted
              </p>
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <p className="text-[10px] text-[#333333] font-semibold">
                Promoted
              </p>
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <p className="text-[10px] text-[#333333] font-semibold">
                Promoted
              </p>
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[#333333] text-[18px]">Recommended Jobs</p>
            <p className="text-[#0154AA] text-[14px] underline">
            See Recommended Jobs
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
             <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[#333333] text-[18px]">Latest Jobs</p>
            <p className="text-[#0154AA] text-[14px] underline">
            See Latest Jobs
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
            <div className="p-2 bg-white rounded-xl">
              <div className="flex justify-between items-center pt-1">
                <Image
                  src="/assets/teamslogo.png"
                  alt="Teams Logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] text-[#333333]">UI/UX Designer</p>
                  <p className="text-[12px] text-[#333333]">Teams</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <GrLocation className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  Seattle, USA (Remote)
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <CgTime className="text-[14px] text-[#585D6E] font-bold" />
                <p className="text-[12px] text-[#585D6E]">
                  1 day ago |{" "}
                  <span className="text-[#0154AA]"> 22 applicants</span>
                </p>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#0154AA] px-4 py-2 rounded-md text-[12px] font-medium text-white flex items-center gap-2">
                  Apply Now
                </button>
                <BsBookmark className="text-[#AAAAAA]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
