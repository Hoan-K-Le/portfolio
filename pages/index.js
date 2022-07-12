import Head from 'next/head'
import Navbar from '../components/navbar'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>

        <title>Hoans Portfolio</title>
      </Head>
    <Navbar />
    <Main/>
   
    </div>
  )
}
