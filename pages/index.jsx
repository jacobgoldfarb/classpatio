import Head from 'next/head'
import Navbar from '../src/components/navbar'
import CardSection from '../src/components/home/card-section'
import InstructorPreviewSection from '../src/components/home/instructor-preview-section'
import MarketingStickiesSection from '../src/components/home/marketing-stickies-section'

import { useRouter } from 'next/router'
import { useCallback } from 'react'

export default function Home() {

  const router = useRouter()

  const handleNavigateToClassPage = useCallback((pageId) => {
    router.push(`classes/${pageId + 1}`)
  })


  return (
    <div className="min-h-screen min-w-screen overflow-hidden ">
      <Head>
        <title>Class Patio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={0}/>
    
      <CardSection clickedCard={handleNavigateToClassPage}/>
      <InstructorPreviewSection/>
      <MarketingStickiesSection/>
      <footer>
      </footer>
    </div>
  )
}