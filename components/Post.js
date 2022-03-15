import { useSession } from 'next-auth/react'

function Post({ username, userimage, image, id }) {
  const { data: session } = useSession()
  return (
    <div className="mt-5 rounded-md bg-white">
      {session && (
        <>
          <div className="ml-3 flex items-center py-3">
            <img
              className="h-[50px] w-[50px] cursor-pointer rounded-full object-cover"
              src={userimage}
              alt="user"
            />
            <div className="ml-3">
              <h4 className="font-semibold">{username}</h4>
              <h5 className="text-gray-400">Data Science</h5>
            </div>
          </div>
          <p className="mb-3 ml-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            aut.
          </p>
          <img className="w-[565px]" src={image} alt="post" />
          <div className="flex items-center justify-around space-x-5 py-3 text-gray-500">
            <div className="cursor-pointer px-10 hover:bg-gray-100">
              <i className="fas fa-heart text-xl"></i>
              <h5>Like</h5>
            </div>
            <div className="cursor-pointer px-10 hover:bg-gray-100">
              <i className="fas fa-comment text-xl"></i>
              <h5>Comment</h5>
            </div>
            <div className="cursor-pointer px-10 hover:bg-gray-100">
              <i className="fas fa-share text-xl"></i>
              <h5>Share</h5>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Post
