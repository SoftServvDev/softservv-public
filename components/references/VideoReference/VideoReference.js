import React from 'react'

import styles from '../../../styles/references/references.module.css'

export default function VideoReference() {
  return (
    <section className='row justify-content-center'>
        <div className={`${styles.video_reference_header} text-center`}>
            <h3>Words from TeamSense!</h3>
        </div>
        <video src='/video/TS-Video.mp4' controls={true} className={`${styles.reference_video} col-lg-6 col-md-7 col-sm-8 col-xs-10`} />
    </section>
  )
}
