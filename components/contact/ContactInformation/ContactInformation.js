import Link from 'next/link'
import React from 'react'

import styles from '../../../styles/contact/contact.module.css'

export default function ContactInformation() {
  return (
    <section className={`${styles.contact_information_container} row justify-content-center`}>
        <div className={`${styles.contact_information}  col-lg-3 col-sm-4 col-xs-10 text-center`}>
            <h3>Contact Information</h3>
                <i className={`${styles.contact_icon} fa-solid fa-envelope`}></i> <Link href='mailto:chase@softservv.com' className={`${styles.contact_link}`}>Chase@SoftServv.com</Link><br />
                <i className={`${styles.contact_icon} fa-brands fa-linkedin`}></i> <Link href='https://www.linkedin.com/in/chase-quinn-9a340525b/' className={`${styles.contact_link}`} target="_blank">LinkedIn</Link><br />
                <i className={`${styles.contact_icon} fa-brands fa-facebook`}></i> <Link href="https://www.facebook.com/profile.php?id=100089095303062" className={`${styles.contact_link}`} target="_blank">Facebook</Link>
        </div>
    </section>
  )
}
