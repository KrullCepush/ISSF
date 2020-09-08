import React from 'react';
import useStyles from './use-styles';


export default function Component(props) {
    const styles = useStyles();
    const type = props.type || 'PDF'

    return (
        <a href={props.link} className={styles.container}>
            <img src={require('./pdf.svg')} />
            <div className={styles.description}>
                <span className={styles.title}>{props.name}</span>
                <span className={styles.info}>{type}</span>
            </div>
        </a>
    )
}

