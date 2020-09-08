import React, { Fragment, useEffect } from 'react';
import Dotdotdot from 'react-dotdotdot'

import useStyles from './use-styles';
import { useService } from "utils/reservices"
import moment from "moment"
import Loader from "components/loader"

export default function WatchNow() {
    const classNames = useStyles();
    const DashboardService = useService('dashboard')

    useEffect(function () {
        DashboardService.getWatch()
    }, [0])

    const data = DashboardService.watchNow.payload[0]
    const dateMoment = moment(data && data.published_at).format('MMMM DD YYYY')

    return (
        <Fragment>
            {data && data.url
                ? (
                    <a target='_blank' href={data.url}>
                        <div className={classNames.wrapper}>
                            <div className={classNames.date}>
                                {dateMoment}
                            </div>
                            <div className={classNames.title}>
                                <Dotdotdot clamp={2}>
                                    {data.title}
                                </Dotdotdot>
                            </div>
                            <div className={classNames.place}>
                                {data.category_title}
                            </div>
                        </div>
                    </a>
                )
                :
                (
                    <div className={classNames.wrapper}>
                        <Loader />
                    </div>
                )

            }
        </Fragment>
    )
}