/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PhotographIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { useSession, signOut } from 'next-auth/react'
type Props = {}

export default function Input({}: Props) {
    const { data : session } = useSession()
    console.log(session)
  return (
   <>
     {session && (
         <div className="flex border-b border-gray-200 p-3 space-x-3 cursor-pointer ">
         <img  onClick={signOut} className="rounded-full h-11 w-11 xl:mr-2 cursor-pointer hover:brightness-95" alt="profile"  src={session.user.image} />
         <div className="w-full divide-y divide-gray-200">
             <div className="">
                 <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" placeholder="What's happening?" rows="2"></textarea>
             </div>
             <div className="flex items-center justify-between pt-2.5">
                 <div className="flex">
                     <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:sky-100 " />
                     <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:sky-100 "/>
                 </div>
                 <button  className=" disabled:opacity-50 bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95">Tweet</button>
             </div>
         </div>
     </div>
    )}
   </>
   
  )
}