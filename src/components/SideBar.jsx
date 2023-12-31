import React, { useState } from 'react'
import { MdHomeFilled, MdOutlineSubscriptions, MdOutlineOutlinedFlag, MdOutlineHelpOutline, MdOutlineFeedback } from "react-icons/md";
import { SiYoutubegaming, SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import { PiMusicNote, PiFilmSlate, PiLightbulb, PiUserSquareLight } from "react-icons/pi";
import { IoNewspaperOutline, IoSettingsOutline, IoBagHandleOutline } from "react-icons/io5";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import { RiVideoLine, RiFireLine } from "react-icons/ri";
import { LuClock5, LuPodcast } from "react-icons/lu";
import { SiYoutubeshorts } from "react-icons/si";
import { GoHistory } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { HiMiniSignal } from "react-icons/hi2";
import { CiTrophy } from "react-icons/ci";
import { GiHanger } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { YOUTUBE_KIDS_LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';



const SideBar = () => {

  const [showSliderThumb, setShowSliderThumb] = useState(false);

  return (
    <div 
    onMouseEnter={()=>{setShowSliderThumb(!showSliderThumb)}} 
    onMouseLeave={()=>{setShowSliderThumb(!showSliderThumb)}} 
    className={`h-screen max-w-60 px-3 overflow-scroll overflow-x-hidden ${showSliderThumb? "" : "scrollbar-hide"} sticky left-0`}>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='bg-gray-100 hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><MdHomeFilled className='mr-5 text-xl'/><Link to="/">Home</Link></li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><SiYoutubeshorts className='mr-5 text-xl'/><Link to="/shorts">Shorts</Link></li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><MdOutlineSubscriptions className='mr-5 text-xl'/>Subscription</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center font-semibold text-lg'>You<LiaAngleRightSolid className='text-sm ml-1'/></li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><PiUserSquareLight className='mr-5 text-xl'/>Your channel</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><GoHistory className='mr-5 text-xl'/>History</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><RiVideoLine className='mr-5 text-xl'/> Your videos</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><LuClock5 className='mr-5 text-xl'/>Watch Later</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><BiLike className='mr-5 text-xl'/>Liked Videos</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><LiaAngleDownSolid className='mr-5'/>Show more</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='px-2 py-2 rounded-lg transition-all flex items-center font-semibold text-lg'>Subscription</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>6 Pack Programmer</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>JokerKiHaveli</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>2nd Store</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>8bit MAMBA</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>12th Hour</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>Abdul Malik Fareed</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>Abhi and Niyu</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><LiaAngleDownSolid className='mr-5'/>Show more</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all font-semibold text-lg'>Explore</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><RiFireLine className='mr-5 text-xl'/>Trending</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><IoBagHandleOutline className='mr-5 text-xl'/>Shopping</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><PiMusicNote className='mr-5 text-xl'/>Music</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><PiFilmSlate className='mr-5 text-xl'/>Films</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><HiMiniSignal className='mr-5 text-xl'/>Live</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><SiYoutubegaming className='mr-5 text-xl'/>Gaming</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><IoNewspaperOutline className='mr-5 text-xl'/>News</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><CiTrophy className='mr-5 text-xl'/>Sport</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><PiLightbulb className='mr-5 text-xl'/>Learning</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><GiHanger className='mr-5 text-xl'/>Fashion & beauty</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><LuPodcast className='mr-5 text-xl'/>Podcasts</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
        <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all font-semibold text-lg'>More from YouTube</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><FaYoutube className='mr-5 text-2xl text-youTube-red'/>YouTube Premium</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><SiYoutubestudio className='mr-5 text-2xl text-youTube-red'/> YouTube Studio</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><SiYoutubemusic className='mr-5 text-2xl text-youTube-red'/>YouTube Music</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><img className='w-6 mr-5' src={YOUTUBE_KIDS_LOGO} alt="" /> YouTube Kids</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><IoSettingsOutline className='mr-5 text-xl'/>Settings</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><MdOutlineOutlinedFlag className='mr-5 text-xl'/>Report history</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><MdOutlineHelpOutline className='mr-5 text-xl'/>Help</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center'><MdOutlineFeedback className='mr-5 text-xl'/>Send feedback</li>
        </ul>
      </section>

      <section className='h-60 flex flex-col py-3 pl-2 pr-3 space-y-3 text-sm font-semibold text-stone-500 mr-1'>
        <p>About Press Copyright Contact us Creator Advertise Developers</p>
        <p>Terms Privacy Policy & SafetyHow YouTube worksTest new features</p>
        <p className='text-stone-400 text-xs'>© 2023 Google LLC</p>
        {/* <p className='text-stone-400 text-xs'>© 2023 Google LLC</p> */}
        {/* <p className='text-stone-400 text-xs'>© 2023 Google LLC</p> */}
      </section>
    </div>
  )
}

export default SideBar



