// This file contains the code for housing the projects on the website

import React from 'react'

import styles from '../../../styles/projects/projects.module.css'

export default function Projects(props) {
  return (
    <section className={`${styles.projects_container}`}>
        <div className={`${styles.projects_header_container} text-center`}>
            <h3>{props.projects_header}</h3>
        </div>
        <div className={`${styles.projects_card_container} row justify-content-around`}>
            {props.children}
        </div>
    </section>
  )
}
