'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import Profile from '@components/Profile'

const UserProfile = ({ params }) => {
  const [userPosts, setUserPosts] = useState([])
  const searchParams = useSearchParams()
  const userName = searchParams.get("name")

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)
      const data = await response.json()

      setUserPosts(data)
    }

    if (params?.id) fetchUserPosts()
  }, [params.id])

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  )
}

export default UserProfile