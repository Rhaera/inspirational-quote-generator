'use client'
import Head from 'next/head'
import styles from './page.module.css'
import { GradientBackgroundCon } from './components/quote-generator/QuoteGenerator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quote Generator For Joy Your Day</title>
        <meta name='description' content='A fun project to generate inspiring quotes'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link href='/favicon.ico'/>
      </Head>
      <GradientBackgroundCon>
        test
      </GradientBackgroundCon>
    </>
  )
}
