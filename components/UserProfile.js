import { useSession, signIn } from 'next-auth/react'
import React from 'react'

function UserProfile() {
  const { data: session } = useSession()
  return (
    <div>
      <div className="mt-5 grid items-center justify-center bg-white md:ml-5 md:w-max md:justify-start md:rounded-lg md:px-16 md:pb-16">
        {session ? (
          <>
            <img
              className="mx-auto h-[70px] w-[70px] rounded-full object-cover"
              src={session?.user?.image}
              alt="user"
            />
            <div className="mt-2 grid items-center md:mt-5">
              <h3 className="text-center font-semibold md:text-lg">
                {session?.user?.name}
              </h3>
            </div>
          </>
        ) : (
          <h3 className="text-center" onClick={signIn}>
            sign in
          </h3>
        )}
        <h4 className="font-light text-gray-500">Software Developer</h4>
        <div className="my-2 flex items-center space-x-3 text-gray-500">
          <h4>show more</h4>
          <i className="fas fa-arrow-down"></i>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
