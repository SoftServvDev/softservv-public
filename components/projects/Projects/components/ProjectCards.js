// This file contains the code for the projects cards

import React from 'react'
import Link from 'next/link'

import styles from '../../../../styles/projects/projects.module.css'

export default function ProjectCards(props) {
    return (
        <div className='card col-lg-3 col-md-4 col-sm-6 col-xs-10'>
            <div className={`${styles.projects_image_container} col-12`}>
                <Link href={props.project_link} target="_blank"><img src={props.img_src} alt={props.img_alt} className='col-12' /></Link>
            </div>

            <div className={`${styles.projects_text_container}`}>
                <h5>{props.project_header}</h5>
                <p className={`${styles.projects_text_body}`} dangerouslySetInnerHTML={{__html:props.project_body}}></p>
            </div>
        </div>
    )
}