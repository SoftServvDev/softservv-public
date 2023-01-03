import React from 'react'
import Link from 'next/link'

import styles from '../../../styles/index/index.module.css'

import CompetenciesData from './data/CompetenciesData'

export default function Hero() {
  return (
    <div className='row bg-dark justify-content-center'>
        <div className='col-lg-10 col-md-7 col-xs-10'>
            <h2 className={`${styles.name_header} text-light`}>Hi, I'm Chase Quinn</h2>
            <p className={`${styles.header_text} text-light`}>
                I am a Customer Support Specialist and Software Engineer.
                <br/>
                <br/>
                Core Competencies:
                <br/>
                <br/>
                {
                  CompetenciesData.competencies.map((comp) => (
                    <span key={comp}>{comp} <span className={`${styles.competency_separator}`}>| </span></span>
                  ))
                }
                <br/>
                <br/>
                Send me a <Link href="/contact" className={`${styles.hero_link}`}>message</Link>, let's work together!
            </p>
        </div>
    </div>
  )
}
