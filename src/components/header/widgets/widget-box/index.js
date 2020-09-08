import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';


export default function WidgetBox(props) {
    const { title, children, primary } = props;
    const classNames = useStyles();

    const boxClassName = clsx(classNames.box, primary && classNames.boxPrimary);
    const titleClassName = clsx(classNames.title, primary && classNames.titlePrimary);
    const bodyClassName = clsx(classNames.body, primary && classNames.bodyPrimary);

    return (
        <div className={boxClassName}>
            <div className={titleClassName}>{title}</div>
            <div className={bodyClassName}>{children}</div>
        </div>
    )
}

WidgetBox.defaultProps = {
    primary: false
}