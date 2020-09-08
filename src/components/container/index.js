import React from 'react';
import useStyles from './use-styles';

export default function Container(props) {

    const classNames = useStyles();

    return (
        <section className={classNames.container}>
            {props.children}
        </section>
    )
}