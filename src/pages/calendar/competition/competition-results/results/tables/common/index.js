import React from 'react';
import useStyles from './use-styles';


export default function Component({data}) {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <img src={`https://result.issf-sports.info/get_image.php?issfid=${data.athlete.info.external_id}&height=80`} />
            <div className={styles.inner}>
                {/* <span>{data.info.rank}</span> */}
                <div>
                    <span className={styles.name}>
                        {data.athlete.info.last_name} {data.athlete.info.first_name}
                    </span>
                </div>
                
            </div>
        </div>
    )
}