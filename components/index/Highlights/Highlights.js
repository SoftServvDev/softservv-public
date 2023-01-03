import React from 'react'

import styles from '../../../styles/index/index.module.css'

export default function Highlights(props) {
    if (props.side === "left") {
        return (
            <section className={`${styles.highlights_container} row`} id={props.html_id}>
                <div className={`${styles.highlights_image_left} col-xl-6 col-md-4 col-xs-10`} style={{backgroundImage: `url(${props.backgroundImage})`}}></div>
                <div className={`${styles.highlights_text_left} ${styles.highlights_text} col-xl-6 col-md-8 col-xs-10`}>
                    <h2>{props.header}</h2>
                    <p className={`${styles.highlights_body} ${styles.highlights_body_one}`} dangerouslySetInnerHTML={{ __html: props.body_one }}></p>
                    <br />
                    <p className={`${styles.highlights_body}`} dangerouslySetInnerHTML={{ __html: props.body_two }}></p>
                </div>
            </section>
        )
    }
    if (props.side === "right") {
        return (
            <section className={`${styles.highlights_container} row`} id={props.html_id}>
                <div className={`${styles.highlights_text_right} ${styles.highlights_text} col-xl-6 col-md-8 col-xs-10`}>
                    <h2>{props.header}</h2>
                    <p className={`${styles.highlights_body} ${styles.highlights_body_one}`} dangerouslySetInnerHTML={{ __html: props.body_one }}></p>
                    <br />
                    <p className={`${styles.highlights_body}`} dangerouslySetInnerHTML={{ __html: props.body_two }}></p>
                </div>
                <div className={`${styles.highlights_image_right} col-xl-6 col-md-4 col-xs-10`} style={{backgroundImage: `url(${props.backgroundImage})`}}></div>
            </section>
        )
    }
}
