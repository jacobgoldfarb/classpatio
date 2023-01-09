import Head from 'next/head'
import Navbar from '../src/components/navbar'
import CardSection from '../src/components/home/card-section'
import InstructorPreviewSection from '../src/components/home/instructor-preview-section'
import MarketingStickiesSection from '../src/components/home/marketing-stickies-section'

import { getAuthenticatedUser, getUserData } from '../api/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export default function Home() {

  const [user, setUser] = useState(null)

  const router = useRouter()

  useEffect( () => {
    const getUser = async () => {
      await getAuthenticatedUser(async (authUser) => {
        if (!authUser) { return }
        const userData = await getUserData(authUser.uid)
        setUser(userData)
      })
    }
    getUser()
  }, [setUser])

  const handleNavigateToClassPage = useCallback((pageId) => {
    router.push(`classes/${pageId}`)
  })


  return (
    <div className="min-h-screen min-w-screen overflow-hidden ">
      <Head>
        <title>Class Patio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={0} authenticated={!!user}/>
    
      <CardSection clickedCard={handleNavigateToClassPage}/>
      <InstructorPreviewSection/>
      <MarketingStickiesSection/>
      <footer>
      </footer>
    </div>
  )
}