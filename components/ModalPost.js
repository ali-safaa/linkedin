import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { useSession } from 'next-auth/react'
import React, { useRef, useState } from 'react'
import { db, storage } from '../firebase'
function ModalPost({ setModalPost }) {
  const refInput = useRef(null)
  const [selectFile, setSelectFile] = useState(null)
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const addPhoto = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => setSelectFile(readerEvent.target.result)
  }

  const importPost = async () => {
    if (loading) return
    setLoading(true)
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        username: session.user.name,
        timestamp: serverTimestamp(),
        userimage: session.user.image,
      })

      const imageRef = ref(storage, `${docRef.id}/image`)
      uploadString(imageRef, selectFile, 'data_url').then((snapshot) => {
        const downloadUrl = getDownloadURL(imageRef)
        updateDoc(db, 'posts', docRef.id),
          {
            image: downloadUrl,
          }
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setLoading(false)
    setSelectFile(null)
    setModalPost(false)
  }
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70">
      <div className="mx-5 mt-10 rounded-md bg-white md:mx-auto md:w-[500px]">
        <div className="mx-3 flex items-center justify-between py-3">
          <h3>Edit your photo</h3>
          <i
            onClick={() => setModalPost(false)}
            className="fas fa-close cursor-pointer"
          ></i>
        </div>
        {selectFile ? (
          <>
            <img
              className="w-[300px] py-2"
              onClick={() => setSelectFile(null)}
              src={selectFile}
              alt=""
            />
          </>
        ) : (
          <h4
            onClick={() => refInput.current.click()}
            className="cursor-pointer py-16 text-center text-blue-500"
          >
            Select images to share
            <input onChange={addPhoto} ref={refInput} hidden type="file" />
          </h4>
        )}

        <div className="mr-5 flex items-center justify-end space-x-3 pb-3">
          <button
            onClick={() => setModalPost(false)}
            className="cursor-pointer rounded-full border-solid border-blue-500 bg-transparent py-1 px-5 hover:bg-blue-100"
          >
            Cancel
          </button>
          <button
            onClick={importPost}
            className="cursor-pointer rounded-full border-none bg-gray-500 px-5 py-1 text-white"
          >
            {loading ? '...loading' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalPost
