// import the use router hook to get the path params
import { useRouter } from 'next/router'

import React from 'react'

export default function UserIdPage() {
  const router = useRouter()
  const { uid } = router.query
  return (
    <div>
      <h1>Hello user at id {uid} </h1>
    </div>
  )
}
