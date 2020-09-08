import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import Wrap from 'components/wrap';

export default function Footer(props) {

    const styles = useStyles();

    return (
        <footer className={styles.footer}>
            <Wrap>
                <div className={styles.footerInner}>
                    <div className={clsx(styles.item, styles.copy)}>
                        <span className={styles.copyYear}>&copy; 2019</span>
                        <span className={styles.copyName}>International Shooting Sport Federation</span>
                    </div>
                    <div className={clsx(styles.item, styles.sitemap)}>
                        <a href="/" className={clsx(styles.sitemapLink)}>
                            sitemap
                        </a>
                    </div>
                    {/* <div className={clsx(styles.item, styles.search)}>
                        <input type="text" className={styles.searchInput} />
                    </div>  */}
                    
                    <div className={clsx(styles.item, styles.search)}>
                        <a href="/" className={clsx(styles.appsLink)}>
                            <img src={require('./app-store.svg')} alt="" />
                        </a>
                        <a href="/" className={clsx(styles.appsLink)}>
                            <img src={require('./google-play.svg')} alt="" />
                        </a>
                    </div>
                    <div className={clsx(styles.item, styles.apps)}>
                        <ul className={styles.copyName}>
                        <li><span >
                        <a href="https://www.issf-sports.org/documents/policy/ISSF_Privacy_Policy_Website.pdf" target="_blank">Privacy Policy</a>
                        </span></li>
                        <li><span >
                       <a href="https://www.issf-sports.org/documents/policy/ISSF_Data_Protection_Regulation.pdf" target="_blank"> Data Protection Regulation</a>
                        </span></li>
                        </ul>
                    </div>
                    <div className={clsx(styles.item, styles.social)}>
                        <a href="https://www.facebook.com/ISSF.Shooting" className={clsx(styles.appsLink)} target="_blank" >
                            <img src={require('./facebook.svg')} alt="" />
                        </a>
                        <a href="https://www.youtube.com/user/issfchannel" className={clsx(styles.appsLink)}  target="_blank">
                            <img src={require('./youtube.svg')} alt="" />
                        </a>
                        <a href="https://www.instagram.com/issf_official/" className={clsx(styles.appsLink)}  target="_blank">
                            <img src={require('./instagram.svg')} alt="" />
                        </a>
                        <a href="https://twitter.com/ISSF_Shooting" className={clsx(styles.appsLink)}  target="_blank">
                            <img src={require('./twitter.svg')} alt="" />
                        </a>
                    </div>
                </div>
            </Wrap>
        </footer>
    )
}