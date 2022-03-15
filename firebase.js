import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyBuuJ8lknr5nocWVbiHYqcnNwivSGl8qn0',
  authDomain: 'linkedin-clone-4c86d.firebaseapp.com',
  projectId: 'linkedin-clone-4c86d',
  storageBucket: 'linkedin-clone-4c86d.appspot.com',
  messagingSenderId: '215140632069',
  appId: '1:215140632069:web:49ab095f5af36c3b25be6c',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
