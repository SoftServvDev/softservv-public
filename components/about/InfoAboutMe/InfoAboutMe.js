import React from 'react'

import styles from '../../../styles/about/about.module.css'

export default function InfoAboutMe() {
  return (
    <div className={`${styles.info_about_me_container} row justify-content-center`}>
        <div className={`${styles.info_about_me_header_container} text-center`}>
            <h4>Personal Things About Myself</h4>
        </div>
        <div className={`${styles.info_about_me_text_container} row justify-content-center`}>
            <p className='col-xl-10 col-xs-11'>
                I love development (it is my go-to hobby). There's just something about making designs and watching it come to life. Even though it typically involves me making 
                new features for my web server at home (my own personal cloud storage with a RAID HDD set up thanks to my brother), I take pride in even those small tweaks that make 
                the UX that much cleaner, easier, or just makes more sense. Besides development, I enjoy playing games (usually on PC), working on our garden, hiking, fishing, and 
                target practice at the house. <span className={`${styles.about_me_highlight}`}>Truth be told, I am still a "<i>southern boy</i>" at heart</span>.
                <br/>
                <br/>
                On social media, I want to help everyone work together on our community. On LinkedIn, I started to push for <span className={`${styles.about_me_highlight}`}>#DepressionAwareness</span>. I 
                have the hope that in someone's hardest times they will have someone that they feel comfortable enough to talk to and help get the back on the right track.
                <br/>
                <br/>
                One thing that I feel makes me different is I am not afraid of change, <span className={`${styles.about_me_highlight}`}>truthfully I constantly strive for it</span>. I 
                feel that if we sit on a process, or anything really, without ever scrutinizing it we miss out on opportunities to better not just ourselves but everyone around us. I 
                take that belief to my job as well, we can always make things better. All we have to do is put the work in to make the changes!
            </p>
        </div>
    </div>
  )
}
