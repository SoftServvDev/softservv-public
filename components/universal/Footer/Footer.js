import Link from 'next/link'
import React from 'react'

import styles from '../../../styles/universal/universal.module.css'

export default function Footer() {
  return (
    <footer className={`${styles.footer_container} row bg-dark justify-content-around`}>
        <div className={`${styles.footer_header_container}`}>
            <h5>Useful Links</h5>
        </div>
        <div className={`${styles.footer_list} ${styles.footer_list_min} col-xl-2 col-md-3 col-xs-10`}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Me</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/skills">Skills</Link></li>
            </ul>
        </div>
        <div className={`${styles.footer_list} ${styles.footer_list_min} col-xl-2 col-md-3 col-xs-10`}>
            <ul>
                <li><Link href="/references">References</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/attributions">Attributions</Link></li>
            </ul>
        </div>
        <div className={`${styles.footer_list} col-xl-2 col-md-3 col-xs-10`}>
            <ul>
                <li><Link href="https://www.facebook.com/profile.php?id=100089095303062" target="_blank"><i className="fa-brands fa-facebook"></i> Facebook</Link></li>
                <li><Link href="https://www.linkedin.com/in/chase-quinn-9a340525b/" target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</Link></li>
                <li><Link href="https://github.com/SoftServvDev" target="_blank"><i className="fa-brands fa-github"></i> Github</Link></li>
            </ul>
        </div>
        <div className={`${styles.copyright}`}>
            2022 SoftServv Interactive - Chase Quinn
        </div>
    </footer>
  )
}
