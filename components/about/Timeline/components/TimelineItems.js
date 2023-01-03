import React from 'react'

import styles from '../../../../styles/about/about.module.css'

export default function TimelineItems(props) {
    return (
        <div className={`${styles.timeline_container}`}>
                    <div className={`${styles.timeline_content}`}>
                        <h4>{props.date}</h4>
                        <h5>{props.header}</h5>
                        <p>
                            {props.body_one}
                            <br />
                            <br />
                            {props.body_two}
                        </p>
                    </div>
                </div>
    )
}
