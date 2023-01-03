import Link from 'next/link'
import React from 'react'

import styles from '../../../styles/attributions/attributions.module.css'

export default function Attribution_Item(props) {
    return (
        <div className={`${styles.attribution_card} card col-lg-3 col-sm-4 col-xs-5`}>
            <div className='row justify-content-center'>
                <img src={props.img_src} alt={props.artwork_name} className="col-12" />
            </div>
            <hr />
            <div className={`${styles.attribution_description} col-12`}>
                <p>Artwork:</p>
                <h6>{props.artwork_name}</h6>
                <p>Artist:</p>
                <h3>{props.artist}</h3>
                <div className='text-center row mb-4 mt-3'>
                    <Link href={props.link} className={`${styles.attribution_link}`} target="_blank">To Original</Link>
                </div>
            </div>
        </div>
    )
}
