import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';

export default function Wrap(props) {
    const styles = useStyles();
    const className = clsx(
        styles.wrap, 
        props.col && styles.wrapColumn,
        props.className
    );
    
    return (
        <div className={className} style={props.style}>
            {props.children}
        </div>
    )
}