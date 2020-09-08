import React from 'react';
import useStyles from './use-styles';
import { icons } from './icons'


export default function TokyoList(props) {
    const styles = useStyles();
    const type = props.type || 'PDF'
    const icon = icons.find(icon => icon.type === type) || { value: require('./icons/pdf.svg') }

    return (
        <a target="_blank" href={props.link} className={styles.container}>
            <img src={icon.value} />
            <div className={styles.description}>
                <span className={styles.info}> {props.position}. </span>
                <span className={styles.title}>{props.name}</span>
            </div>
        </a>
    )
}

