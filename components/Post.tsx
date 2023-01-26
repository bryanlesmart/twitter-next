/* eslint-disable @next/next/no-img-element */
import { DotsHorizontalIcon , ChatIcon , TrashIcon , HeartIcon, ShareIcon , ChartBarIcon } from '@heroicons/react/outline'
type Props = {}

export default function Post({post}: Props) {
  return (
    <div className="flex p-3     border-b border-gray-200">
      {/* user image */}
      <img className="h-11 w-11 rounded-full mr-4 " src={post.userImage} alt={post.name} />
               
      {/* right side */}
      <div className="flex-1">
        {/* Header */}

        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
          <h4   className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                    <span className="text-sm sm:text-[15px]" >{post.user}</span>
                    <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
          </div>

          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>

        {/* post text */}
        <p  className="text-gray-800 text-[15px sm:text-[16px] mb-2" >{post.text}</p>
       

        {/* post image */}

        <img src={post.img} alt="image" className="rounded-2xl mr-2" />

        {/* icons */}

             <div className="flex justify-between text-gray-500 p-2">
            
                    <ChatIcon className="hoverEffect h-11 w-9  hover:text-sky-500 hover:bg-sky-100"/>
                    <TrashIcon className="hoverEffect h-11 w-9 hover:text-red-600 hover:bg-red-100"/>
                    <HeartIcon className="hoverEffect h-11 w-9 hover:text-red-600 hover:bg-red-100"/>
                    <ShareIcon className="hoverEffect h-11 w-9 hover:text-sky-500 hover:bg-sky-100"/>
                    <ChartBarIcon className="hoverEffect h-11 w-9 hover:text-sky-500 hover:bg-sky-100 "/>
             </div>
        </div>
      </div>
  )
}




