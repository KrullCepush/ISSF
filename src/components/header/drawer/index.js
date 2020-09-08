import React, { Fragment, useState } from 'react';
import useStyles from './use-styles';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export default function Drawer({ menu, isOpen, onDrawerClose }) {
    const [ active, setActive ] = useState(null);
    const styles = useStyles();

    if (!isOpen) {
        return null;
    }

    return (
        <Fragment>
            <div
                className={styles.drawerOverlay}
                onClick={onDrawerClose}
            />
            <div className={styles.drawerContainer}>
                <div className={styles.drawer}>
                    <ul className={styles.menu}>
                        {menu.map(item => (
                            <li key={item.title} className={clsx(styles.menuItem, active === item && '_active', item.hamburgerOnly && '_hamburger-only',)}>
                                <div className={styles.menuItemInner}>
                                    {(item.submenu && item.submenu.length) ? (
                                        <span className={styles.menuItemLink} onClick={() => setActive(item)}>
                                            {item.title}
                                        </span>
                                    ) : (
                                        <Link {...item} className={styles.menuItemLink} onClick={onDrawerClose} />
                                    )}
                                    {item.submenu && item.submenu.length && (
                                        <ul className={styles.submenu}>
                                            <li className={styles.submenuItem}>
                                                <Link {...item} className={styles.submenuItemLink} onClick={onDrawerClose} />
                                            </li>
                                            {item.submenu.map(subitem => (
                                                <li key={subitem.title} className={styles.submenuItem}>
                                                    <Link {...subitem} className={styles.submenuItemLink} onClick={onDrawerClose} />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

// function Link(props) {
//   if (props.route) {
//     return (
//       <NavLink
//         to={props.route.getPath()}
//         className={props.className}
//         exact={props.route.exact}
//         onClick={props.onDrawerClose}
//       >
//         {props.title}
//       </NavLink>
//     )
//   } else {
//     return <a href={props.link} className={props.className}>{props.title}</a>
//   }
// }

function Link(props) {
    if (props.route) {
        return <NavLink
            to={props.route.getPath(props.routeParams || {})}
            className={props.className}
            exact={props.hasOwnProperty('exact') ? props.exact : props.route.exact}
            onClick={props.onClick}>
            {props.title}
        </NavLink>
    } else {
        return <a
            href={props.link}
            className={props.className}
            onClick={props.onClick}>{props.title}</a>
    }
}

