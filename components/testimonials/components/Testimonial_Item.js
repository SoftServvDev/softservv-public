import React from 'react'

import styles from '../../../styles/testimonials/testimonials.module.css'

const showStars = (stars) => {
    switch(stars){
        case 1:
            return (
                <>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                </>
            )
        case 2:
            return (
                <>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                </>
            )
        case 3:
            return (
                <>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                </>
            )
        case 4:
            return (
                <>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i class={`fa-regular fa-star ${styles.testimonial_star_empty}`}></i>
                </>
            )
        case 5:
            return (
                <>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                    <i className={`fa-solid fa-star ${styles.testimonial_stars}`}></i>
                </>
            )
    }
}

export default function Testimonial_Item(props) {
  return (
    <div className={`${styles.testimonial_card} row card col-lg-3 col-md-4 col-sm-6 col-xs-10`}>
        <div className={`${styles.testimonial_image_container} row justify-content-center`}>
            <img src={props.img_src} alt={props.img_alt} className="col-12" />
        </div>
        <div className={`${styles.testimonial_text_container}`}>
            <h5>{props.name}</h5>
            <h6>{props.job}</h6>
            <div className={`${styles.star_container}`}>
                {showStars(props.stars)}
            </div>
            <hr />
            <blockquote dangerouslySetInnerHTML={{__html: props.review}}></blockquote>
        </div>
    </div>
  )
}
