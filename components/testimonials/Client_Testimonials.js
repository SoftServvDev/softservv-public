import React from 'react'

import styles from '../../styles/testimonials/testimonials.module.css'

export default function Client_Testimonials(props) {
  return (
    <section className={`${styles.testimonial_container} row justify-content-center`}>
        {props.children}
    </section>
  )
}
