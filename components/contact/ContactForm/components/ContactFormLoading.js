import React from 'react'

import styles from '../../../../styles/contact/contact.module.css'

export default function ContactFormLoading() {
    return (
        <div className={`${styles.loading_screen} row justify-content-center`}>
            <div className={`${styles.loading_spinner} spinner-border text-primary`} role="status">
            </div>
        </div>
    )
}
