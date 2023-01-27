/* eslint-disable @next/next/no-img-element */
import { getProviders ,signIn } from 'next-auth/react' 

type Props = {}

export default function SignIn({ providers }: Props) {

  const onGoogleClick = async () => {

  }
  return (
    <div className="flex justify-center mt-20 space-x-4">
    <img
      src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
      alt="twitter image inside a phone"
      className="hidden object-cover md:w-44 md:h-80 rotate-6  md:inline-flex"
    />
    <div className="">
      <div className="flex flex-col items-center">
        <img
          className="w-36 object-cover"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt="twitter logo"
        />
        <p className="text-center text-sm italic my-10">
          This app is created for learning purposes
        </p>
        {Object.values(providers).map((provider) => (
          <button
          key={provider.name}
          onClick={()=> signIn(provider.id, {callbackUrl: "/" }) }
          className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
        >
          {provider.name}
        </button>
        ))}
      </div>
    </div>
  </div>
  )
}

export async function getServerSideProps(){
  const providers = await getProviders()

  return {
    props:{
      providers
    }
  }
}