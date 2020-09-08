import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';


export default function PageHeader(props) {
    const styles = useStyles();

    return (
        <div className={clsx(styles.pageInner, props.className)} style={props.style}>
            {props.children}
        </div>
    )
}