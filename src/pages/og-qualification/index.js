import React, { useEffect, useState } from 'react';

import { useService } from 'utils/reservices';
import DescriptionTitle from "./decription-title"
import Breadcrumbs from 'components/breadcrumbs';
import Wrap from 'components/wrap'
import useStyles from './use-styles';
import clsx from "clsx"

import NationAndName from './nation-name'
import NationAndNumber from "./nation-number"
import EventAndName from "./event-name"

export default function OGQualification({ breadcrumbs = [] }) {
    const styles = useStyles();
    const Quota = useService('quota');

    const [activePage, setActivePage] = useState(0)

    useEffect(() => {
        Quota.getOgQuota();
    }, []);

    return (
        <Wrap>
            <Wrap>
                <div>
                    <div className={styles.ogBreadcrumbs}>
                        <Breadcrumbs
                            items={breadcrumbs}
                        />
                    </div>
                    <div className={styles.ogDescriptionTitle}>
                        <DescriptionTitle />
                    </div>
                    <div className={styles.ogSwitcher}>
                        <div className={clsx(styles.linkDescWrap, activePage === 0 && styles.ogSwitcherActive)} onClick={() => setActivePage(0)}>
                            <div className={styles.linkHeader}>Quota Places</div>
                            <div className={styles.linkDesc}>BY NATION AND NAME</div>
                        </div>
                        <div className={clsx(styles.linkDescWrap, activePage === 1 && styles.ogSwitcherActive)} onClick={() => setActivePage(1)}>
                            <div className={styles.linkHeader}>Quota Places</div>
                            <div className={styles.linkDesc}>BY EVENT AND NAME</div>
                        </div>
                        <div className={clsx(styles.linkDescWrap, activePage === 2 && styles.ogSwitcherActive)} onClick={() => setActivePage(2)}>
                            <div className={styles.linkHeader}>Quota Places</div>
                            <div className={styles.linkDesc}>BY NATION AND NUMBER</div>
                        </div>
                    </div>
                    <div className={styles.qualificatioWrapperStructure} >
                        {activePage === 0 && <NationAndName />}
                        {activePage === 1 && <EventAndName />}
                        {activePage === 2 && <NationAndNumber />}
                    </div>
                </div>
            </Wrap>
        </Wrap>
    )
}