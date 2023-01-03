import React from 'react'
import Head from 'next/head'
import Navigation from '../components/universal/Navigation/Navigation'
import Headline from '../components/universal/Headline/Headline'
import Reference from '../components/references/Reference/Reference'
import ReferenceData from '../components/references/Reference/data/ReferenceData'
import Reference_item from '../components/references/Reference/components/Reference_item'
import VideoReference from '../components/references/VideoReference/VideoReference'
import Footer from '../components/universal/Footer/Footer'

const headline_info ={
    headline_header: "References",
    text_center: "text-center"
}

export default function references() {
    return (
        <>
            <Head>
                <title>SoftServv Interactive (Chase Quinn)</title>
                <meta name="description" content="SoftServv Interactive (Chase Quinn) - Senior IT Customer Support Specialist & Software Engineer. Support specializations in ticketing systems, troubleshooting, SaaS environments, educational environments, and more. Engineering specializations include single-page applications (SPAs), NextJS, React, Vanilla (HTML/CSS/JS), and Python (Flask/Django). Let's build together!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/SoftServv Interactive-Transparent.png" />
            </Head>
            <Navigation references='active' />
            <main>
            <Headline headline_header={headline_info.headline_header} text_center={headline_info.text_center}>
                I reached out to a few individuals and asked them for a reference. You can find what they had to say below.
            </Headline>
            <hr />
            <Reference>
                {
                    ReferenceData.reference.map((ref) => (
                        <Reference_item key={ref.id} avatar={ref.avatar} name={ref.name} position={ref.position} quote={ref.quote} />
                    ))
                }
            </Reference>
            <hr />
            <VideoReference />
            </main>
            <Footer />
        </>
    )
}
