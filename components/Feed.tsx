import React from 'react'
import AddFeed from './AddFeed'
import ImportPost from './ImportPost'
import UserProfile from './UserProfile'

function Feed() {
  return (
    <div className="space-x-3 md:flex md:items-start md:justify-around">
      <UserProfile />
      <ImportPost />
      <AddFeed />
    </div>
  )
}

export default Feed
