import React, { Fragment } from 'react';

import useStyles from './use-styles';
import { NavLink as Link } from 'react-router-dom';
import { sectionCommittees } from 'pages';
import Publications from './publications';

export default function Description({ descriptions, publicationItems }) {
    const styles = useStyles();

    return (
        <div className={styles.wrapper}>
            {/* <Link
                className={styles.link}
                to={sectionCommittees.getPath()}
                exact
            >
                BACK TO COMMITTEES
            </Link> */}

            {descriptions.map((description) => {
                return (
                    //TODO: use uniq key from server
                    <Fragment key={description.title}>
                        <div className={styles.pageTitle} >
                            {description.title}
                        </div>
                        <div className={styles.subTitle}>
                            {description.subTitle}
                        </div>
                        <div className={styles.text}>
                            {description.paragraphs.map((paragraph) => {
                                return (
                                    paragraph
                                )
                            })}
                        </div>
                    </Fragment>
                )
            })}
            <Publications
                publicationItems={publicationItems}
            />
        </div>
    )
}