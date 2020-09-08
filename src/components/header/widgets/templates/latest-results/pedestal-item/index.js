import React, { Fragment } from 'react';
import useStyles from './use-styles';

// WatchNow.defaultProps = {
//     place: null,
//     country: null,
//     name: null,
//     score: null
// }

export default function WatchNow(props){

    const classNames = useStyles();

    const {
        place=null,
        country=null,
        name=null,
        score=null
    } = props;

    return (
        <div className={classNames.wrapper}>
            <div className={classNames.head}>
                <div className={classNames.position}>
                    {place}
                </div>
                <div className={classNames.country}>
                    <div className={classNames.countryName}>
                        {country}
                    </div>
                    <div className={classNames.flag}>
                        <img src={`https://result.issf-sports.info/get_flag.php?nat=${country}&width=40`} className={classNames.flagImg}/>
                    </div>
                </div>
                <div className={classNames.score}>
                    {score}
                </div>
            </div>
            <div className={classNames.name}>
                {name}
            </div>
        </div>
    )
}