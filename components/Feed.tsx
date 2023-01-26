
import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'
import Post from './Post'
type Props = {}

export default function Feed({}: Props) {
  const posts = [
    {
      id: 1,
      name: "Bryan Opriasa",
      username: "@bryanopriasa",
      userImage: "https://placeimg.com/80/80/people",
      img: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "GG",
      timestamp: "4hr"
    }
      ,
    {
      id: 2,
      name: "Ella Nacion",
      username: "@ellanacion",
      userImage: "https://placeimg.com/80/80/people",
      img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      text: "Bible Study",
      timestamp: "1hr"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold cursor-pointer ">Home</h2>
          <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
              <SparklesIcon className="h-5"/>
          </div>
      </div>
      <Input/>
      {posts.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
  </div>
  )
}