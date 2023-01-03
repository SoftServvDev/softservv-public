import Head from 'next/head'
import React from 'react'
import InfoAboutMe from '../components/about/InfoAboutMe/InfoAboutMe'
import Timeline from '../components/about/Timeline/Timeline'
import Footer from '../components/universal/Footer/Footer'
import Navigation from '../components/universal/Navigation/Navigation'
import Headline from '../components/universal/Headline/Headline'

import TimelineData from '../components/about/Timeline/data/TimelineData'
import TimelineItems from '../components/about/Timeline/components/TimelineItems'

const headline_info = {
    img_src: '/portraits/Headshot-Squared-BnW.jpg',
    img_alt: 'Chase Quinn',
    headline_header: 'About Me',
}

export default function about() {
    return (
        <>
            <Head>
                <title>SoftServv Interactive (Chase Quinn)</title>
                <meta name="description" content="SoftServv Interactive (Chase Quinn) - Senior IT Customer Support Specialist & Software Engineer. Support specializations in ticketing systems, troubleshooting, SaaS environments, educational environments, and more. Engineering specializations include single-page applications (SPAs), NextJS, React, Vanilla (HTML/CSS/JS), and Python (Flask/Django). Let's build together!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/SoftServv Interactive-Transparent.png" />
            </Head>
            <Navigation about='active' />
            <Headline img_src={headline_info.img_src} img_alt={headline_info.img_alt} headline_header={headline_info.headline_header}>
                I have a passion for finding solutions to problems. That is why I grew so attached to Software Engineering and Customer Support, in both roles I am able to feed into that passion.
                I have two sons, who I want to show that as long as you give your all into what you love, you can always make a passion a career. As a parent, they keep me on my toes. We go
                hiking, fishing, and play games together, which is always fun! For more "<i>professional</i>" information about me, you can check below!
            </Headline>
            <hr />
            <InfoAboutMe />
            <hr />
            <Timeline header="My Timeline">
                {
                    TimelineData.items.map((item) => (
                        <TimelineItems key={item.id} date={item.date} header={item.header} body_one={item.body_one} body_two={item.body_two} />
                    ))
                }
            </Timeline>
            <Footer />
        </>
    )
}
