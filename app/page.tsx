'use client'
import Head from 'next/head'
import styles from './page.module.css'
import CloudOne from './../assets/imgs/cloud-and-thunder.png'
import CloudTwo from './../assets/imgs/cloudy-weather.png'
import {
  BackgroundImageOne, 
  BackgroundImageTwo, 
  CustomFooter, 
  CustomFooterLink, 
  CustomLink, 
  GoldSpan, 
  GradientBackgroundCon,
  InnerQuoteGenerator,
  QuoteGeneratorButton,
  QuoteGeneratorButtonText,
  QuoteGeneratorFeature,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle
} from './components/quote-generator/QuoteGenerator'
import { useState } from 'react'
import { Quote } from './models/Quote'
import QuoteDb from './database/QuotesDb'

export default function Home() {
  const [quotesGenerated, setQuotesGeneratedAmount] = useState<Number | undefined>(0);
  const [showingQuote, setIfQuoteIsShowing] = useState<Boolean | undefined>(false);
  const saveQuote = (quote: Quote) => {
    QuoteDb(quote);
    setIfQuoteIsShowing(true);
    setQuotesGeneratedAmount(Number(quotesGenerated) + 1);
  }
  return (
    <>
      <Head>
        <title>Quote Generator For Joy Your Day</title>
        <meta name='description' content='A fun project to generate inspiring quotes'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link href='/favicon.ico'/>
      </Head>
      <GradientBackgroundCon>

        <QuoteGeneratorFeature>
          <InnerQuoteGenerator>
            <QuoteGeneratorTitle>

            </QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <CustomLink 
              href="https://zenquotes.io" 
              target="_blank" 
              rel="noopener noreferrer">ZenQuotes API</CustomLink>.
            </QuoteGeneratorSubTitle>
            <QuoteGeneratorButton>
              <QuoteGeneratorButtonText>
                Make A Quote!
              </QuoteGeneratorButtonText>
            </QuoteGeneratorButton>
          </InnerQuoteGenerator>
        </QuoteGeneratorFeature>

        <BackgroundImageOne
          src={CloudOne}
          height='300'
          alt='cloudyOneBg'
        />
        <BackgroundImageTwo
          src={CloudTwo}
          height='300'
          alt='cloudyTwoBg'
        />
        <CustomFooter>
          <>
            Quotes Generated: {quotesGenerated}
            <br/>
            Developed with <GoldSpan>faith</GoldSpan> by <CustomFooterLink 
                                                          href='https://www.linkedin.com/in/raul-alencar-silva' 
                                                          target='_blank' 
                                                          rel='noopener noreferrer'>RhR Productions</CustomFooterLink>
          </>
        </CustomFooter>
      </GradientBackgroundCon>
    </>
  )
}
