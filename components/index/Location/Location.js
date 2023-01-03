import React from 'react'
import Map from './Map/Map'

import styles from '../../../styles/index/index.module.css'

export default function Location() {
    return (
        <section className={`${styles.location_container} row justify-content-center`}>
            <div className={`${styles.location_header}`}>
                <h2>Location</h2>
            </div>
            <div className={`${styles.location_map_container} col-xl-4 col-md-6 col-xs-10`}>
                <Map />
            </div>
            <div className={`${styles.location_text} col-xl-8 col-md-4 col-xs-10`}>
                <ul className={`${styles.location_list}`}>
                    <li>► Near Gaffney, SC 29341</li>
                    <li>► Remote</li>
                </ul>
                <p>
                    Physically serving those around Gaffney, SC, I am also very comfortable working remotely with those who are located in other parts of the country. I am not sure I am 
                    open to relocation as of yet, but that is not set in stone.
                </p>
            </div>
        </section>
    )
}