import React from 'react'
import Head from 'next/head'
import Navigation from '../components/universal/Navigation/Navigation'
import Headline from '../components/universal/Headline/Headline'
import ContactInformation from '../components/contact/ContactInformation/ContactInformation'
import ContactForm from '../components/contact/ContactForm/ContactForm'
import Footer from '../components/universal/Footer/Footer'

const headline_info = {
    headline_header: "Contact Me",
    text_center: "text-center"
}

export default function contact() {
    return (
        <>
            <Head>
                <title>SoftServv Interactive (Chase Quinn)</title>
                <meta name="description" content="SoftServv Interactive (Chase Quinn) - Senior IT Customer Support Specialist & Software Engineer. Support specializations in ticketing systems, troubleshooting, SaaS environments, educational environments, and more. Engineering specializations include single-page applications (SPAs), NextJS, React, Vanilla (HTML/CSS/JS), and Python (Flask/Django). Let's build together!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/SoftServv Interactive-Transparent.png" />
            </Head>
            <Navigation contact='active' />
            <main>
                <Headline headline_header={headline_info.headline_header} text_center={headline_info.text_center}>
                    You can contact me by any of the methods below!
                </Headline>
                <hr />
                <ContactInformation />
                <ContactForm />
            </main>
            <Footer />
        </>
    )
}
