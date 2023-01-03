import React from 'react'

import styles from '../../../styles/about/about.module.css'

export default function Timeline(props) {
    return (
        <section>
            <div className={`${styles.timeline_header_container} text-center`}>
                <h4>{props.header}</h4>
            </div>
            <div className={`${styles.timeline}`}>
                {props.children}
            </div>
        </section>
    )
}
