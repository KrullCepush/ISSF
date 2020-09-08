import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './use-styles';


export default function Button(props) {
    const styles = useStyles();

    if (props.to) {
        return (
            <Link to={props.to} className={styles.button} onClick={props.onClick}>
                {props.children}
            </Link>
        )
    } else if(props.href) {
        return (
            <a href={props.to} className={styles.button} onClick={props.onClick}>
                {props.children}
            </a>
        )
    } else {
        return (
            <button className={styles.button} onClick={props.onClick}>
                {props.children}
            </button>
        )
    }

    
}