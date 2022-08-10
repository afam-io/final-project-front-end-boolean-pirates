import React from 'react'
import Image from 'next/image'

const profile = ({user}) => {
  console.log(user)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="font-bold text-xl p-2 mb-2">{user?.name}</div>
      <Image
        className="w-full"
        src={user?.picture}
        alt={user?.sub}
        height="450px"
        width="600px"
      />
     <p className="text-gray-700 p-2 text-base">{user?.nickname}</p>
     <p className="text-gray-700 p-2 text-base">{user?.updated_at}</p>
    </div>
  )
}

export default profile