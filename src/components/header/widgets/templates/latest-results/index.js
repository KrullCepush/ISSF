import React, { Fragment } from 'react';
import useStyles from './use-styles';

import PedestalItem from './pedestal-item'

export default function WatchNow(){

    const classNames = useStyles();

    return (
        <div className={classNames.wrapper}>
            <div className={classNames.head}>
                <div className={classNames.date}>
                OCT 9 - OCT 14 2019
                </div>
                <div className={classNames.place}>
                    Al Ain, UAE
                </div>
                <div className={classNames.linkBox}>
                    <a href="/calendar/competition/2549/results">
                        View all
                    </a>
                </div>
            </div>
            <div className={classNames.title}>
            ISSF WORLD CUP FINAL SHOTGUN
            </div>
            <div className={classNames.discipline}>
            TRAP MEN
            </div>
            <div className={classNames.pedestal}>
                <PedestalItem
                    place="1"
                    country="ITA"
                    score="44"
                    name="Mauro DE FILIPPIS"
                />

                <PedestalItem
                    place="2"
                    country="RUS"
                    score="41"
                    name="Alexey ALIPOV"
                />

                <PedestalItem
                    place="3"
                    country="ESP"
                    score="34"
                    name="Alberto FERNANDEZ"
                />
            </div>
        </div>
    )
}