import React from 'react';
import {NavLink} from 'react-router-dom'
import useStyles from './use-styles';

export default function Navigation({ items, style }) {
    const styles = useStyles();
    return (
        <nav className={styles.navigationContainer} style={style}>
            {items.map((item, index) => (
                <>
                    {index > 0 && <span className={styles.delimeter} children="/"/>}
                    <NavLink exact={true} to={item.link} className={styles.link}>
                        {item.title}
                    </NavLink>
                </>
            ))}
        </nav>
    )
}