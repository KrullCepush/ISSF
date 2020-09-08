import React, { Fragment } from 'react';

import useStyles from './use-styles';

export default function Publications({ publicationItems }) {
    const styles = useStyles();

    return (
        <Fragment>
            <div className={styles.pageTitle}>
                ISSF Athletes Committee Publications
            </div>
            <div className={styles.publications}>
                {publicationItems.map((publication) => {
                    return (
                    //TODO: use uniq key from server
                        <Fragment key={publication.title}>
                            <div className={styles.publication} >
                                <a href={publication.link} target="_blank">
                                    <img src={require('assets/icons/pdf-icon.svg')} alt="" className={styles.fileIcon} />
                                </a>
                                {publication.title}
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </Fragment>
    )
}