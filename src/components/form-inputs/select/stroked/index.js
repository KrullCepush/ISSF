import React from 'react';
import useStyles from './use-styles';
import Select from '../index';
import clsx from 'clsx';


export default function StrokedSelect(props) {
    const styles = useStyles();
    const { title, className, ...selectProps } = props;

    return (
        <Select 
            className={clsx(styles.select, className)}
            labelClassName={styles.selectLabel}
            {...selectProps}
        >
            <span className={clsx(styles.selectTitle, '_title')}>
                {title}
            </span>
        </Select>
    )
}