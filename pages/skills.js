import React from 'react'
import Head from 'next/head'
import Navigation from '../components/universal/Navigation/Navigation'
import Headline from '../components/universal/Headline/Headline'
import SoftSkills from '../components/skills/SoftSkills/SoftSkills'
import HardSkills from '../components/skills/HardSkills/HardSkills'
import TechStack from '../components/skills/TechStack/TechStack'
import Footer from '../components/universal/Footer/Footer'

const headline_info = {
    img_src: '/art/attr-required/pexels-anna-tarazevich-5598301.jpg',
    img_alt: 'Photo by Anna Tarazevich',
    headline_header: 'Skills',
}

export default function skills() {
    return (
        <>
            <Head>
                <title>SoftServv Interactive (Chase Quinn)</title>
                <meta name="description" content="SoftServv Interactive (Chase Quinn) - Senior IT Customer Support Specialist & Software Engineer. Support specializations in ticketing systems, troubleshooting, SaaS environments, educational environments, and more. Engineering specializations include single-page applications (SPAs), NextJS, React, Vanilla (HTML/CSS/JS), and Python (Flask/Django). Let's build together!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/SoftServv Interactive-Transparent.png" />
            </Head>
            <Navigation skills='active' />
            <Headline img_src={headline_info.img_src} img_alt={headline_info.img_alt} headline_header={headline_info.headline_header}>
                Over the years, I have developed an assortment of soft and hard-skills. Through everything I have been through (not all of it has been wonderful), I am very proud of the
                skills that the situations have created. I am putting the majority of my skills on this page, if you have any questions about any of them you can send me a message on
                the <a href='/contact'>Contact</a> page!
            </Headline>
            <hr />
            <main>
                <SoftSkills />
                <HardSkills />
                <TechStack />
            </main>
            <Footer />
        </>
    )
}
