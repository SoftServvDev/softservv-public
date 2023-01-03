import React from 'react'

import styles from '../../../styles/universal/universal.module.css'

export default function Headline(props) {
    if (props.img_src) {
        return (
            <section className={`${styles.headline_container} row justify-content-center`}>
                <div className={`${styles.headline_image_container} col-lg-3 col-sm-4 col-xs-11`}>
                    <img src={props.img_src} alt={props.img_alt} className='col-12' />
                </div>
                <div className={`${styles.headline_text_container} col-lg-9 col-sm-8 col-xs-11`}>
                    <h3>{props.headline_header}</h3>
                    <p className={`${styles.headline_text}`}>
                        {props.children}
                    </p>
                </div>
            </section>
        )
    }
    else {
        return (
            <section className={`${styles.headline_container} row justify-content-center`}>
                <div className={`${styles.headline_text_container} text-center`}>
                    <h3>{props.headline_header}</h3>
                </div>
                <p  className={`${styles.headline_text}col-xl-8 col-md-10 col-xs-11 ${props.text_center}`}>
                    {props.children}
                </p>
            </section>
        )
    }
}
