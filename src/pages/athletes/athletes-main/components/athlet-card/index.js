import React from 'react';
import useStyles from './use-styles';
import Flag from 'components/flag';

export default function Component(props) {
    const styles = useStyles();
// d
    return (
        <div className={styles.container} style={props.style}>
            <div className={styles.top}>
                <span className={styles.discipline}>
                    10m air pistol MEN
                </span>
                <div>
                    <div className={styles.flag}>
                        <img src="https://result.issf-sports.info/get_flag.php?nat=rus&width=57" className={styles.flagInner}/>
                    </div>
                </div>
                <div className={styles.info}>
                    <span className={styles.score}>
                        3456
                    </span>
                    <span className={styles.country}>
                        RUS
                    </span>
                </div>
            </div>
            <span className={styles.name}>Chernousov Artem</span>
            <div className={styles.imageContaier}>
                <img src="https://result.issf-sports.info/get_image.php?issfid=SHUSAM1903198701&width=239" className={styles.image}/>
            </div>
        </div>
    )
}