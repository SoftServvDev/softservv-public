import React from 'react'

import styles from '../../../styles/skills/skills.module.css'

export default function SoftSkills() {
  return (
    <section className={`${styles.soft_skills_container} row justify-content-center`}>
        <div className={`${styles.soft_skills_card} card col-11`}>
            <div className={`${styles.soft_skills_header_container}`}>
                <h4>Soft Skills</h4>
            </div>
            <hr />
            <div className={`${styles.soft_skills_text_container} row justify-content-around`}>
                <ul className='col-md-3 col-xs-10'>
                    <li>Great Communicator</li>
                    <li>Leadership</li>
                    <li>Problem Solver</li>
                    <li>Empathetic</li>
                </ul>
                <ul className={`${styles.soft_skills_text_min} col-md-3 col-xs-10`}>
                    <li>Understanding</li>
                    <li>Writing Skills</li>
                    <li>Software Lifecycle</li>
                    <li>Team Member</li>
                </ul>
                <ul className={`${styles.soft_skills_text_min} col-md-3 col-xs-10`}>
                    <li>Time Management</li>
                    <li>Analytical</li>
                    <li>Organization</li>
                    <li>Critical Thinker</li>
                </ul>
            </div>
        </div>
    </section>
  )
}
