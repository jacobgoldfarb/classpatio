import Head from 'next/head'
import Navbar from '../src/components/navbar'
import { CardContainer } from '../src/components/home/card-container'

import { getAuthenticatedUser, getUserData } from '../api/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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


  return (
    <div className="min-h-screen min-w-screen overflow-hidden ">
      <Head>
        <title>EdRover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={0} authenticated={!!user}/>
    
      <div className="min-h-screen bg-gradient-to-b from-blue-700 to-purple-800 text-center pt-20">
        <header className="font-header text-white text-3xl mx-5 mt-10">
          <div>Introducing <span className="font-bold">good screen time.</span></div>
          <div className="w-1/2 mx-auto text-center text-xl mt-4">Replace games and nonsense with extracurricular activities that lead to higher levels of achievement.</div>
        </header>
        <CardContainer cardDetails={[
          {
            programName: "Art",
            instructorName: "Elana Kim",
            description: "This is art class",
            thumbnailUrl: "test.com",
          },
          {
            programName: "Art",
            instructorName: "Elana Kim",
            description: "This is art class",
            thumbnailUrl: "test.com",
          },
        ]}/>
      </div>
      <div className="min-h-screen bg-white from-blue-700 to-purple-800 text-center pt-20">
        <header className="font-header text-white text-3xl mx-5 mt-10">
          <div>Hello world</div>
        </header>
      </div>
      <footer>
      </footer>
    </div>
  )
}
