/* eslint-disable @next/next/no-img-element */
    
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import  { HomeIcon } from '@heroicons/react/solid'
import {HashtagIcon ,DotsHorizontalIcon, DotsCircleHorizontalIcon,UserIcon , ClipboardIcon, BookmarkIcon,InboxIcon, BellIcon  } from '@heroicons/react/outline'


export default function Sidebar () {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-center fixed h-full">
        {/* {Twitter Logo} */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image width="50" height="50" alt="twitter.logo" src="/images/twitter-logo.svg"></Image>
        </div>
        {/* {SideBdrMenuItem} */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
            <SidebarMenuItem text="Notification" Icon={BellIcon}/>
            <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
            <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon}/>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
            <SidebarMenuItem text="Profile" Icon={UserIcon}/>
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>


        </div>
        {/* {Button} */}
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
        {/* {MiniProfile} */}

        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img className="rounded-full h-10 w-10 xl:mr-2 " alt="profile"  src="https://placeimg.com/80/80/people" />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold ">Bryan Opriasa</h4>
                <p className="text-gray-500 ">@bryanopriasa</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>

    </div>
  )
}

