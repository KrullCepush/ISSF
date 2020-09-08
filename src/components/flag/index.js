import React from 'react';
import useStyles from './use-styles';
import clsx from 'clsx';


export default function Flag(props) {
    const styles = useStyles(props);

    if (!props.code) {
        return null;
    }

    return (
        <div className={styles.wrap}>

            <span className={styles.code}>{props.code}</span>
            <div className={clsx(styles.container, props.className)}>
                <img src={`https://result.issf-sports.info/get_flag.php?nat=${props.code}&width=${props.width}`} className={styles.image} />
            </div>
        </div>
    )
}

Flag.defaultProps = {
    width: 50
}