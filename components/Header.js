import { useSession, signOut, signIn } from 'next-auth/react'
import React from 'react'

function Header() {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-around bg-white py-3">
      <div className="flex items-center space-x-5">
        <img
          className="w-[40px] cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
          alt="logo"
        />
        <div className="hidden w-[250px] items-center bg-gray-100 md:inline-flex">
          <i className="fas fa-search px-3 py-2 text-gray-500"></i>
          <input
            className="border-none bg-transparent outline-none placeholder:text-gray-500"
            type="text"
            placeholder="search"
          />
        </div>
        <i className="fas fa-search inline-flex text-gray-500 md:hidden"></i>
      </div>
      <div className="flex items-center space-x-6 text-xl text-gray-600 md:space-x-7">
        <div className="grid items-center justify-center">
          <i className="fas fa-home cursor-pointer hover:text-black"></i>
          <small className="hidden text-xs md:inline-flex">Home</small>
        </div>
        <div className="grid items-center">
          <i className="fas fa-user cursor-pointer hover:text-black"></i>
          <small className="hidden text-xs md:inline-flex">My network</small>
        </div>
        <div className="grid items-center">
          <i className="fas fa-shopping-bag cursor-pointer hover:text-black"></i>
          <small className="hidden text-xs md:inline-flex">Jobs</small>
        </div>
        <div className="grid items-center">
          <i className="fas fa-comment cursor-pointer hover:text-black"></i>
          <small className="hidden text-xs md:inline-flex">Messaging</small>
        </div>
        <div className="grid items-center">
          <i className="fas fa-bell cursor-pointer hover:text-black"></i>
          <small className="hidden text-xs md:inline-flex">Notifications</small>
        </div>
        {session ? (
          <img
            onClick={signOut}
            className="h-[40px] w-[40px] cursor-pointer rounded-full object-cover"
            src={session?.user?.image}
            alt="user"
          />
        ) : (
          <h5 className="cursor-pointer " onClick={signIn}>
            Sign in
          </h5>
        )}
      </div>
    </div>
  )
}

export default Header
