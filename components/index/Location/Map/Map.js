import React from 'react'

import styles from '../../../../styles/index/index.module.css'

export default function Map() {
  return (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52246.49282184539!2d-81.6942513389651!3d35.071592164995515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885704fd2d80affd%3A0x1a062da86b817de5!2sGaffney%2C%20SC!5e0!3m2!1sen!2sus!4v1672268095989!5m2!1sen!2sus"
    className={`${styles.location_map}`}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}