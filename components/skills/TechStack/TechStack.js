import React from 'react'

import styles from '../../../styles/skills/skills.module.css'

export default function TechStack() {
  return (
    <section className={`${styles.tech_stack_container}`}>
        <div className={`${styles.tech_stack_text_container} row justify-content-center text-center`}>
            <h4>Typical Tech Stack</h4>
            <p className='col-md-8 col-sm-9 col-xs-11'>
                My typical tech stack includes MySQL, Flask, React, and Heroku. I will usually run my back-ends with Gunicorn on the Heroku servers, while the front-ends are typically 
                set up on Netlify and Vercel.
            </p>
        </div>
        <div className={`${styles.tech_stack_list} row justify-content-center`}>
            <img src='/tech_stack/mysql.png' className='col-lg-2 col-sm-3 col-xs-10'/>
            <img src='/tech_stack/flask.png' className='col-lg-2 col-sm-3 col-xs-10'/>
            <img src='/tech_stack/react.png' className='col-lg-2 col-sm-3 col-xs-10'/>
            <img src='/tech_stack/heroku.png' className='col-lg-2 col-sm-3 col-xs-10'/>
        </div>
    </section>
  )
}
