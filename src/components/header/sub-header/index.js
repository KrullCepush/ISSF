import React, { useEffect } from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import { NavLink as Link, useParams } from 'react-router-dom';
import Breadcrumbs from 'components/breadcrumbs';

SubHeader.defaultProps = {
    getNavigation: (params) => ([]),
    breadcrumbs: []
}


export default function SubHeader({ title, getNavigation, breadcrumbs = [] }) {
    const styles = useStyles();
    const params = useParams();

    useEffect(() => {
        document.body.classList.add('_subheader')
        return () => {
            document.body.classList.remove('_subheader')
        }
    })

    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    <Breadcrumbs
                        items={breadcrumbs}
                        isWhite
                    />
                    <div className={styles.subHeader}>
                        <div className={styles.left}>
                            <div className={styles.info}>
                                <div className={styles.infoLeft}>
                                    <h1 className={styles.title}>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                            <div className={styles.navigationContainer}>
                                <ul className={styles.navigation}>
                                    {getNavigation(params).map(item => (
                                        <li key={item.link} className={styles.navItem}>
                                            <Link exact to={item.link} className={clsx(styles.navItemLink)}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </PageInner>
            </Wrap>
        </Wrap>
    )
}