import Head from 'next/head'
import Image from 'next/image'
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Widgets from "../components/Widgets"



export default function Home({newsResults}: Props) {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className="flex min-h-screen  mx-auto">
        {/* {Sidebar} */}
        <Sidebar/>
        {/* {Feeds} */}
          <Feed/>
        {/* {Widgets} */}

        <Widgets newsResults={newsResults.articles}/>

        {/* {Modal} */}
      </main>
    </>
  )
}



export async function getServerSideProps() {
  const newsResults = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/us.json")
    .then((res) => res.json()) 


  return {
      props:{
          newsResults
      }
  }
  
}