import '../styles/globals.css'
import Navbar from '../components/navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <Navbar />
      <Main/>
      <About />
      <Skills/>
      <Projects/>
      {/* footer */}

    </>
  )
}

export default MyApp
