import React from 'react'

function AddFeed() {
  return (
    <div className="mt-5 hidden items-center rounded-md bg-white px-5 py-3 md:inline-grid">
      <h4 className="ml-3 pb-2 font-semibold">Add to your feed</h4>
      <div className="ml-3 mt-2 flex items-start">
        <img
          className="h-[50px] w-[50px] cursor-pointer rounded-full object-cover"
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="follow"
        />
        <div className="ml-3 grid items-center">
          <h4 className="font-semibold">javascript</h4>
          <h5 className="pt-1 text-gray-500">learn javascript</h5>
          <div className=" mt-2 flex cursor-pointer items-center space-x-3 rounded-full border-solid border-gray-500 px-3 py-1 hover:bg-gray-100">
            <i className="fas fa-plus"></i>
            <h3 className="cursor-pointer font-semibold text-gray-500">
              Follow
            </h3>
          </div>
        </div>
      </div>
      <div className="ml-3 mt-2 flex items-start">
        <img
          className="h-[50px] w-[50px] cursor-pointer rounded-full object-cover"
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="follow"
        />
        <div className="ml-3 grid items-center">
          <h4 className="font-semibold">javascript</h4>
          <h5 className="pt-1 text-gray-500">learn javascript</h5>
          <div className=" mt-2 flex cursor-pointer items-center space-x-3 rounded-full border-solid border-gray-500 px-3 py-1 hover:bg-gray-100">
            <i className="fas fa-plus"></i>
            <h3 className="font-semibold text-gray-500">Follow</h3>
          </div>
        </div>
      </div>
      <div className="ml-3 mt-2 flex items-start">
        <img
          className="h-[50px] w-[50px] cursor-pointer rounded-full object-cover"
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="follow"
        />
        <div className="ml-3 grid items-center">
          <h4 className="font-semibold">javascript</h4>
          <h5 className="pt-1 text-gray-500">learn javascript</h5>
          <div className=" mt-2 flex cursor-pointer items-center space-x-3 rounded-full border-solid border-gray-500 px-3 py-1 hover:bg-gray-100">
            <i className="fas fa-plus"></i>
            <h3 className="font-semibold text-gray-500">Follow</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFeed
