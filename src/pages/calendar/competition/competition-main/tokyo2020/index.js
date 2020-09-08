import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import FileLink from './file-link';
import { listInformationTokyo } from './list'

export default function Competition() {
    const styles = useStyles();

    return (
        <div className={styles.wrap}>
            {listInformationTokyo.map((element, index) => (
                <div key={index} className={styles.element}>
                    <div className={styles.header}> {element.header} </div>
                    {element.info.map(desc => (
                        <FileLink type={desc.type} name={desc.name} link={desc.src} position={desc.position} key={desc.position} />
                    ))}
                </div>
            ))}
        </div>
    )
}