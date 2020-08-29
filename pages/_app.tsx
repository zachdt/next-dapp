import {useEffect, useState, Component} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NextApp from 'next/app'

import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'

import { CssBaseline, LinearProgress  } from '@material-ui/core'
import { Layout, Web3Manager } from '../components'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 15000
  return library
}

export default function App ({ Component, pageProps }) {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      Router.events.on('routeChangeStart', () => {
        setIsLoading(true)
      })
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
        <Web3ReactProvider getLibrary={getLibrary}>
          <Web3Manager>
            <Layout>
              <CssBaseline/>
              <div style={{minHeight: '7em'}} />
              {isLoading ? <LinearProgress color='secondary' style={{marginTop: '1em'}} /> : <Component {...pageProps} /> }
            </Layout>
          </Web3Manager>
        </Web3ReactProvider>
      </>
    )
  }