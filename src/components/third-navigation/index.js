import React from 'react';
import {NavLink} from 'react-router-dom'
import useStyles from './use-styles';

export default function Navigation({ items, style }) {
    const styles = useStyles();
    return (
        <nav className={styles.navigationContainer} style={style}>
            {items.map(item => (
                <NavLink to={item.link} className={styles.link}>
                    {item.title}
                </NavLink>
            ))}
        </nav>
    )
}