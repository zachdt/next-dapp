import {useEffect, useState} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { CssBaseline  } from '@material-ui/core'

import { Layout } from '../components'


export default function App ({Component, pageProps}) {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log('Here we go!')

    Router.events.on('routeChangeComplete', () => {
      setIsLoading(false)
    })

    Router.events.on('routeChangeError', () => {
      setIsLoading(false)
    })

    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  
  }, [isLoading, setIsLoading])

  return (
    <>
      <Head>
        <title>next-dapp</title>
        <meta name='description' content='An opinionated Ethereum DApp frontend template using React, Next.js, Typescript, Material-UI, and Web3-React'/>
      </Head>
      <Layout>
        <CssBaseline/>
        <div style={{minHeight: '6em'}} />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}