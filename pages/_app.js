import '../styles/globals.css'
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingBar from 'react-top-loading-bar'
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(50)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  }, [])
  return (
  <>
  <LoadingBar
        color='red'
        progress={progress}
        waitingTime = {400}
        onLoaderFinished={() => setProgress(0)}
      />
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  );
}

export default MyApp
