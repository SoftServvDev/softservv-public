import React from 'react'

import styles from '../../../styles/skills/skills.module.css'

export default function HardSkills() {
  return (
    <section className={`${styles.hard_skills_container} row justify-content-center`}>
        <div className={`${styles.hard_skills_card} card col-11`}>
            <div className={`${styles.hard_skills_header_container}`}>
                <h4>Hard Skills</h4>
            </div>
            <hr />
            <div className={`${styles.hard_skills_text_container} row justify-content-around`}>
                <ul className='col-md-3 col-xs-10'>
                    <li><h5 className={`${styles.hard_skills_text_header}`}>Customer Support</h5></li>
                    <li>Ticketting Systems</li>
                    <li>Multi-System Troubleshooting</li>
                    <li>Start-Up Experience</li>
                    <li>Issue Reporting</li>
                    <li>Analytics</li>
                    <li>SaaS Experience</li>
                </ul>
                <ul className={`${styles.hard_skills_text_min} col-md-3 col-xs-10`}>
                    <li><h5 className={`${styles.hard_skills_text_header}`}>Front-End Dev</h5></li>
                    <li>HTML/CSS/JS</li>
                    <li>Bootstrap</li>
                    <li>Jquery</li>
                    <li>React</li>
                    <li>NextJS</li>
                    <li>DNS</li>
                </ul>
                <ul className={`${styles.hard_skills_text_min} col-md-3 col-xs-10`}>
                    <li><h5 className={`${styles.hard_skills_text_header}`}>Back-End Dev</h5></li>
                    <li>Django (Python)</li>
                    <li>Flask (Python)</li>
                    <li>SQL/MySQL</li>
                    <li>APIs</li>
                    <li>JWT</li>
                    <li>DNS</li>
                </ul>
            </div>
        </div>
    </section>
  )
}
