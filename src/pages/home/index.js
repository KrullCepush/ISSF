import React from 'react';
import injectModules from 'utils/reservices';
import Wrap from 'components/wrap';
import useStyles from './use-styles';

function Home(props) {
    const styles = useStyles();
    return (
        <Wrap>
            <div className={styles.wrapper}>
                <a href="http://www.olympic.org/" className={styles.sponsor} target="_blank">
                    <img src={require('./sponsor-icons/IOC_Logo.svg')}  className={styles.sponsorImage}/>
                </a>
                <a href="http://www.wada-ama.org/" className={styles.sponsor} target="_blank">
                    <img src={require('./sponsor-icons/wada.svg')}  className={styles.sponsorImage}/>
                </a>
                <a href="https://tokyo2020.org/" className={styles.sponsor} target="_blank">
                    <img src={require('./sponsor-icons/tokyo2020.svg')}  className={styles.sponsorImage}/>
                </a>
                <a href="https://tokyo2020.org/" className={styles.sponsor} target="_blank">
                    <img src={require('./sponsor-icons/tokyo2020para.svg')}  className={styles.sponsorImage}/>
                </a>
                <a href="http://www.ipc-shooting.org/" className={styles.sponsor} target="_blank">
                    <img src={require('./sponsor-icons/ipc_logo.svg')}  className={styles.sponsorImage}/>
                </a>
            </div>
        </Wrap>
    );
}

export default injectModules([])(Home);