import React from 'react'
import Head from 'next/head'
import Navigation from '../components/universal/Navigation/Navigation'
import Headline from '../components/universal/Headline/Headline'
import Footer from '../components/universal/Footer/Footer'
import Client_Testimonials from '../components/testimonials/Client_Testimonials'
import TestimonialData from '../components/testimonials/data/TestimonialData'
import Testimonial_Item from '../components/testimonials/components/Testimonial_Item'

const headline_info = {
    headline_header: "Testimonials",
    text_center: "text-center"
}

export default function testimonials() {
  return (
    <>
            <Head>
                <title>SoftServv Interactive (Chase Quinn)</title>
                <meta name="description" content="SoftServv Interactive (Chase Quinn) - Senior IT Customer Support Specialist & Software Engineer. Support specializations in ticketing systems, troubleshooting, SaaS environments, educational environments, and more. Engineering specializations include single-page applications (SPAs), NextJS, React, Vanilla (HTML/CSS/JS), and Python (Flask/Django). Let's build together!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/SoftServv Interactive-Transparent.png" />
            </Head>
            <Navigation testimonials='active' />
            <Headline headline_header={headline_info.headline_header} text_center={headline_info.text_center}>
                I pulled these testimonials from my profile on Upwork. Some of the clients left stars without a review, but that's alright! I removed their full names for privacy 
                and gave descriptions below each snippet. (By the way, my first name is Michael!)
            </Headline>
            <hr />
            <main>
                <Client_Testimonials>
                    {
                        TestimonialData.testimonials.map((rev) => (
                            <Testimonial_Item
                            key={rev.id}
                            stars={rev.stars}
                            img_src={rev.img_src}
                            img_alt={rev.img_alt}
                            name={rev.name}
                            job={rev.job}
                            review={rev.review}
                            />
                        ))
                    }
                </Client_Testimonials>
            </main>
            <Footer />
        </>
  )
}
