import React from 'react';
import {
    NavLink as Link
} from "react-router-dom";

import useStyles from '../use-styles';
import getMenuItems from "../navigation-list"

export default function ASideNav() {
    const styles = useStyles();



    return (
        <ul>
            {getMenuItems().map((item) => (
                <li key={item.path} className={styles.wrapItemLink}>
                    <Link exact to={item.path} className={styles.navItemLink}>
                        {item.pageTitle.toUpperCase()}
                    </Link>
                </li>
            ))}
        </ul>

    )
}