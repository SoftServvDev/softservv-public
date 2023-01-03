import React from 'react'
import Head from 'next/head'
import Navigation from '../components/universal/Navigation/Navigation'
import Headline from '../components/universal/Headline/Headline'
import Footer from '../components/universal/Footer/Footer'

import AttributionData from '../components/attributions/data/AttributionData'
import Attributions from '../components/attributions/Attributions'
import Attribution_Item from '../components/attributions/components/Attribution_Item'

const headline_info = {
    headline_header: "Attributions",
    text_center: "text-center"
}

export default function attributions() {
    return (<>
        <Head>
            <title>SoftServv Interactive (Chase Quinn)</title>
            <meta name="description" content="SoftServv Interactive (Chase Quinn) - Senior IT Customer Support Specialist & Software Engineer. Support specializations in ticketing systems, troubleshooting, SaaS environments, educational environments, and more. Engineering specializations include single-page applications (SPAs), NextJS, React, Vanilla (HTML/CSS/JS), and Python (Flask/Django). Let's build together!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logos/SoftServv Interactive-Transparent.png" />
        </Head>
        <Navigation />
        <main>
            <Headline headline_header={headline_info.headline_header} text_center={headline_info.text_center}>
                This page is dedicated to giving credit to any artwork used on this webpage where the artist was listed. All of these are free to use, however I wanted to make sure 
                that I gave the real artist the credit!
            </Headline>
            <hr />
            <Attributions>
                {
                    AttributionData.attributions.map((att) => (
                        <Attribution_Item key={att.id} img_src={att.img_src} artwork_name={att.artwork_name} artist={att.artist} link={att.link} />
                    ))
                }
            </Attributions>
        </main>
        <Footer />
    </>
    )
}