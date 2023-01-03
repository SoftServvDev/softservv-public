import React from 'react'

import styles from '../../../../styles/references/references.module.css'

export default function Reference_item(props) {
    return (
        <div className={`${styles.reference_container} row col-md-10 col-xs-11`}>
            <div className={`${styles.avatar_container} col-md-2 col-xs-7`}>
                <img src={props.avatar} className={`${styles.avatar} col-12`} />
            </div>
            <div className={`${styles.reference_body_container}`}>
                <h4>{props.name}</h4>
                <p className={`${styles.reference_position}`}>{props.position}</p>
                <blockquote className={`${styles.reference_blockquote}`}>
                    <i className={`${styles.reference_quotation} fa-solid fa-quote-left`}></i>
                    {props.quote}
                    <i className={`${styles.reference_quotation} fa-solid fa-quote-right`}></i>
                </blockquote>
            </div>
        </div>
    )
}
