import { getProviders, signIn } from 'next-auth/react'

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div className="grid items-center justify-center md:flex md:justify-around">
          <div className="grid items-center">
            <h1 className=" mt-5 text-center font-light text-gray-500">
              Welcome to your professional community
            </h1>
            <h3
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="mx-auto mt-3 hidden w-max cursor-pointer bg-blue-500 px-5 py-2 font-semibold text-white duration-300 hover:bg-black md:inline-grid "
            >
              Sign in with {provider.name}
            </h3>
          </div>
          <img className="w-[500px]" src="/images/photo.jpg" alt="photo" />
          <h3
            onClick={() => signIn(provider.id)}
            className="mx-auto flex w-max cursor-pointer items-center bg-blue-500 px-5 py-1 font-semibold text-white duration-300 hover:bg-black md:hidden"
          >
            Sign in with {provider.name}
          </h3>
        </div>
      ))}
    </>
  )
}

export const getServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
