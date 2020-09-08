import React from 'react';
import useStyles from './use-styles';


export default function InfoBlock(props) {
    const styles = useStyles();

    return (
        <div className={styles.infoBlock} style={{ gridArea: props.name }}>
            <h3 className={styles.title}>{props.title}</h3>
            {props.children}
        </div>
    )
}