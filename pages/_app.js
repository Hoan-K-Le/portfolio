import '../styles/globals.css'
import Navbar from '../components/navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />

      {/* footer */}
      
    </>
  )
}

export default MyApp
