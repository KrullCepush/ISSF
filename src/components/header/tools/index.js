import React, { useState } from 'react';

import useStyles from './use-styles';
import Drawer from '../drawer';
import { menu } from '../menu';

export default function Tools() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const styles = useStyles();

    const toggleDrawer = (e) => {
        e.preventDefault();
        setIsDrawerOpen(true);
    }

    return (
        <div className={styles.tools}>
            {/* <div className={styles.toolsItem}>
                <a href="/">
                    <img src={require('./search.svg')} />
                </a>
            </div> */}
            <div className={styles.toolsItem}>
                <a
                    onClick={toggleDrawer}
                    href="/"
                >
                    <img src={require('./hamburger.svg')} />
                </a>
                <Drawer
                    onDrawerClose={() => setIsDrawerOpen(false)}
                    isOpen={isDrawerOpen}
                    menu={menu}
                />
            </div>
        </div>
    )
}