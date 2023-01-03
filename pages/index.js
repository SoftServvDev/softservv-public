import Head from 'next/head'
import CallToAction from '../components/index/CallToAction/CallToAction'
import Hero from '../components/index/Hero/Hero'
import Highlights from '../components/index/Highlights/Highlights'
import Location from '../components/index/Location/Location'
import Terminal from '../components/index/Terminal/Terminal'
import Footer from '../components/universal/Footer/Footer'
import Navigation from '../components/universal/Navigation/Navigation'

import HighlightsData from '../components/index/Highlights/data/HighlightsData'

export default function Home() {
  return (
    <>
      <Head>
        <title>SoftServv Interactive (Chase Quinn)</title>
        <meta name="description" content="SoftServv Interactive (Chase Quinn) - Senior IT Customer Support Specialist & Software Engineer. Support specializations in ticketing systems, troubleshooting, SaaS environments, educational environments, and more. Engineering specializations include single-page applications (SPAs), NextJS, React, Vanilla (HTML/CSS/JS), and Python (Flask/Django). Let's build together!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logos/SoftServv Interactive-Transparent.png" />
      </Head>
      <Navigation home='active' />
      <Hero />
      <Terminal />
      {
        HighlightsData.highlights.map((highlight) => (
          <Highlights key={highlight.id} side={highlight.side} html_id={highlight.html_id} backgroundImage={highlight.backgroundImage} header={highlight.header} body_one={highlight.body_one} body_two={highlight.body_two} />
        ))
      }
      <CallToAction />
      <Location />
      <Footer />
    </>
  )
}
