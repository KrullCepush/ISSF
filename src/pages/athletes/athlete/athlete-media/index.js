import React, { useState } from 'react';
import useStyles from "./style"
import clsx from "clsx"

import AthleteMedia_Bio from './bio'
import AthleteMedia_Media from './media'
import AthleteMedia_Gallery from './gallery'
import style from './style';




export default function AthleteMedia({ data }) {
    const styles = useStyles();

    const [page, setPage] = useState('bio')

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div onClick={() => setPage('bio')}
                    className={clsx(styles.headerLink, page === 'bio' && styles.activeLink)}>
                    BIO
                </div>
                <div onClick={() => data.articles.length === 0 || data.youtube_videos.length !== 0 && setPage('media')}
                    className={clsx(styles.headerLink,
                        page === 'media' && styles.activeLink,
                        (data.articles.length === 0 || data.youtube_videos.length === 0) && styles.disabled)}>
                    MEDIA
                </div>
                <div onClick={() => data.galleries.length !== 0 && setPage('image')}
                    className={clsx(styles.headerLink,
                        page === 'image' && styles.activeLink,
                        data.galleries.length === 0 && styles.disabled)}>
                    GALLERY
                </div>
            </div>
            <div className={styles.content}>
                {page === 'bio' &&
                    <AthleteMedia_Bio data={data} />
                }
                {page === 'media' &&
                    <AthleteMedia_Media data={data} />
                }
                {page === 'image' &&
                    <AthleteMedia_Gallery data={data} />
                }
            </div>
        </div>
    )
}