import React from 'react';
// import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import useStyles from './use-styles';
import * as routes from 'pages'

export default function Navigation({ menu }) {
    const styles = useStyles();
    return (
        <nav className={styles.navigation}>
            <ul className={styles.menu}>
                {menu.map(item => (
                    <li key={item.title} className={styles.menuItem}>
                        <div className={styles.menuItemInner}>
                            <Link {...item} className={styles.menuItemLink} exact={false} />
                            {item.submenu && item.submenu.length && (
                                <ul className={styles.submenu}>
                                    <li key={item.title} className={styles.submenuItem}>
                                        <span className={styles.submenuItemLink}>{item.title}</span>
                                    </li>
                                    {item.submenu.map(subitem => (
                                        <li key={subitem.title} className={styles.submenuItem}>
                                            <Link {...subitem} className={styles.submenuItemLink} exact={false} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function Link(props) {
    if (props.route) {
        return <NavLink to={props.route.getPath(props.routeParams || {})} className={props.className} exact={props.hasOwnProperty('exact') ? props.exact : props.route.exact}>{props.title}</NavLink>
    } else {
        return <a href={props.link} className={props.className}>{props.title}</a>
    }
}