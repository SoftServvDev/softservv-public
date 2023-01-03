import Link from 'next/link'
import React from 'react'

import styles from '../../../styles/index/index.module.css'

export default function CallToAction() {
  return (
    <section className={`${styles.call_to_action_container} row justify-content-center bg-dark`}>
        <div className={`${styles.call_to_action_header} text-center`}>
        <h2>Let's Work Together!</h2>
        </div>
        <div className={`${styles.call_to_action_text} row justify-content-center`}>
            <p className='col-xl-8 col-md-10 col-xs-10 text-center'>
                I love what I do, and I take pride in my work. If you want to talk about starting a project or full-time employment just send me a message. I respond quickly!
            </p>
        </div>
        <div className={`${styles.call_to_action_button}`}>
            <Link href='/contact'>Go to Contact Page</Link>
        </div>
    </section>
  )
}
