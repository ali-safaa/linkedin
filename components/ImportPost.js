import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

import ModalPost from './ModalPost'
import { db } from '../firebase'
function ImportPost() {
  const { data: session } = useSession()
  const [modalPost, setModalPost] = useState(false)
  const [posts, setPosts] = useState([{ username: 'loading' }])
  useEffect(
    () =>
      onSnapshot(collection(db, 'posts'), (snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    [db]
  )
  return (
    <div>
      {session ? (
        <div className="mt-5 rounded-md bg-white">
          <div className="mx-2 my-5 mt-5 flex items-center">
            <img
              className="h-[60px] w-[60px] rounded-full object-cover"
              src={session?.user?.image}
              alt="user"
            />
            <input
              className="ml-3 w-[400px] rounded-full border-solid border-gray-500 bg-transparent py-3 pl-3 placeholder:font-semibold"
              type="text"
              placeholder="Start a post"
            />
          </div>
          <div className="flex items-center justify-center space-x-8 pb-4 text-xl">
            <div
              onClick={() => setModalPost(true)}
              className="flex cursor-pointer items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-200"
            >
              <i className="fas fa-image text-blue-300"></i>
              <h5 className="text-sm">Photo</h5>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-200">
              <i className="fas fa-play text-red-300"></i>
              <h5 className="text-sm">Video</h5>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-200">
              <i className="fas fa-calendar text-yellow-300"></i>
              <h5 className="text-sm">Event</h5>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 px-3 py-2 text-gray-500 hover:bg-gray-200">
              <i className="fas fa-newspaper text-yellow-300"></i>
              <h5 className="text-sm">Write article</h5>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="mt-3 bg-white py-3 text-center">
          you need to sign in to post a photo
        </h4>
      )}
      {modalPost && <ModalPost setModalPost={setModalPost} />}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userimage={post.userimage}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default ImportPost
