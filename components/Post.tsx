/* eslint-disable @next/next/no-img-element */

import  Moment from 'react-moment'
import { setDoc, doc, onSnapshot, collection, addDoc, serverTimestamp, updateDoc, deleteDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { useSession } from 'next-auth/react'
import { useRef, useState, useEffect } from 'react'
import { DotsHorizontalIcon , ChatIcon , TrashIcon , HeartIcon, ShareIcon , ChartBarIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { Session } from 'next-auth'


type Props = {

}

export default function Post({post}: Props) {
  const { data : session } = useSession()
  const [likes , setLikes ] = useState([])
  const [input , setInput] = useState("")
  const [selectedFile , setSelectedFile] = useState(null)

  const [hasliked, setHasliked] = useState(false)

  useEffect(() => {
    const unsubscribe = onSnapshot(
     collection(db, "posts" , post.id, "likes"),
     (snapshot) => setLikes(snapshot.docs)
    )
 }, [db])

  useEffect(() => {
      setHasliked(likes.findIndex((like)=>like.id === session?.user.uid) !== -1)
  }, [likes, session])

   const filePickerRef = useRef()

   const sendPost = async () => {
      const docRef = await addDoc(collection(db, 'post'),
      {
           id: session.user.id,
           text: input,
           userImage:session.user.image,
           timestamp: serverTimestamp(),
           name: session.user.name,
           username: session.user.username

      })

      const imageRef = ref(storage, `posts/${docRef.id}/image`)

        if (selectedFile) {
        await uploadString(imageRef, selectedFile, "data_url").then(async () => {
            const downloadURL = await getDownloadURL(imageRef)
            await updateDoc(doc(db, "posts", docRef.id), {
                image: downloadURL
            })
        })
        }
        setInput("")
        setSelectedFile(null)
   }
 


  const likePost = async () => {
    
    if(hasliked){
      await deleteDoc(doc(db,"posts", post.id, 'likes', session?.user.uid))
    }else{
      await setDoc(doc(db, "posts", post.id , 'likes', session?.user.uid), {
        username: session?.user.username
      })
    }

  }
  


 
  return (
    <div className="flex p-3     border-b border-gray-200">
      {/* user image */}
      <img className="h-11 w-11 rounded-full mr-4 " src={post.data().userImage} alt={post.data().name} />
    
               
      {/* right side */}
      <div className="flex-1">
        {/* Header */}

        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
          <h4   className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.data().name}</h4>
                    <span className="text-sm sm:text-[15px]" >{post.data().username}</span>
                    <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
          </div>

          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>

        {/* post text */}
        <p  className="text-gray-800 text-[15px sm:text-[16px] mb-2" >{post.data().text}</p>
       

        {/* post image */}

        <img  src={post.data().image} alt="image" className="rounded-2xl mr-2" />

        {/* icons */}

             <div className="flex justify-between text-gray-500 p-2">
            
                    <ChatIcon className="hoverEffect h-9 w-9  hover:text-sky-500 hover:bg-sky-100"/>
                    <TrashIcon className="hoverEffect h-9 w-9 hover:text-red-600 hover:bg-red-100"/>
                    { hasliked ? (
                       <HeartIconFilled onClick={likePost} className="hoverEffect h-9 w-9 text-red-600 hover:bg-red-100"/>
                    ) : (
                      <HeartIcon onClick={likePost} className="hoverEffect h-9 w-9 hover:text-red-600 hover:bg-red-100"/>
                    )}
                    <ShareIcon className="hoverEffect h-9 w-9 hover:text-sky-500 hover:bg-sky-100"/>
                    <ChartBarIcon className="hoverEffect h-9 w-9 hover:text-sky-500 hover:bg-sky-100 "/>
             </div>
        </div>
      </div>
  )
}




