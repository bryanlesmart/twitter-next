/* eslint-disable @next/next/no-img-element */
import { PhotographIcon, EmojiHappyIcon , XIcon} from '@heroicons/react/outline'
import { useSession, signOut } from 'next-auth/react'
import { useState, useRef } from 'react'
import { db , storage } from '../firebase'
import { addDoc, collection, serverTimestamp, updateDoc, doc} from 'firebase/firestore'
import { getDownloadURL, ref, uploadString,  } from "firebase/storage"


export default function Input({}) {
    const { data : session } = useSession()
    const [input, setInput] = useState()
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const filePickerRef = useRef(null)

  
    const sendPost = async () => {

        if(loading) return
        setLoading(true)

        const docRef =  await addDoc(collection(db, "posts"),{
            id: session.user.id,
            text: input,
            userImage: session.user.image,
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
        setLoading(false)
    }
     
    const addImage = (e) => {
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
  return (
   <>
     {session && (
         <div className="flex border-b border-gray-200 p-3 space-x-3 cursor-pointer ">
         <img  onClick={signOut} className="rounded-full h-11 w-11 xl:mr-2 cursor-pointer hover:brightness-95" alt="profile"  src={session.user.image} />
         <div className="w-full divide-y divide-gray-200">
             <div className="">
                 <textarea value={input} onChange={(e) => setInput(e.target.value )} className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" placeholder="What's happening?" rows="2"></textarea>
             </div>
             {selectedFile && (
                <>
                    <div>
                        <XIcon className="h-8 text-white  absolute cursor-pointer rounded-full bg-red-500" onClick={ () =>setSelectedFile(null)  }/>
                        <img  src={selectedFile} className={`${loading && "animate-pulse"}`} alt="image" /> 
                    </div>
                </>
             )}
             <div className="flex items-center justify-between pt-2.5">
                 {!loading && (
                    <>
                        <div className="flex">
                            <div onClick={() => filePickerRef.current.click()}>
                                <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:sky-100 " />
                                <input type="file" hidden ref={filePickerRef} onChange={addImage} />
                            </div>
                            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:sky-100 "/>
                        </div>
                        <button onClick={sendPost} disabled={!input} className=" disabled:opacity-50 bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95">Tweet</button>
                    </>
                 )}
             </div>
         </div>
     </div>
    )}
   </>
   
  )
}