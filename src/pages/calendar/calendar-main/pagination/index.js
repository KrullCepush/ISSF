import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';

export default function Pagination({ year, month, setMonth, setYear }) {
    const styles = useStyles();

    function onClickLeft(ev) {
        ev.preventDefault();
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    }

    function onClickRight(ev) {
        ev.preventDefault();
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }

    }

    return (
        <div className={styles.container}>
            <a href="#prev" onClick={onClickLeft} className={clsx(styles.button, styles.prev)}>
                Previous month
            </a>
            <a href="#next" onClick={onClickRight} className={clsx(styles.button, styles.next)}>
                Next month
            </a>
        </div>
    )
}