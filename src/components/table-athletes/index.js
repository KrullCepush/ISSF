
import React from 'react';
import { Link } from 'react-router-dom';
import { athletePage } from 'pages';

export function renderAthleteName(row, props, classNameProps) {

    if (row.item.athlete_id) {
        return (
            <Link to={athletePage.getPath({ id: row.item.athlete_id })} className={props.classNames.nameInner}>
                <div className={classNameProps}>
                    <i className={props.classNames.avatar} style={{ backgroundImage: `url(https://result.issf-sports.info/get_image.php?issfid=${row.item.athlete_external_id}&width=30)`, border: ['1px solid rgb(105, 105, 105)'] }} />
                    <div className={props.classNames.avatar_name}> {row.item.name} </div>
                </div>
            </Link>
        )
    }
    return (
        <div className={classNameProps}>
            <i className={props.classNames.avatar} style={{ backgroundImage: `url(https://result.issf-sports.info/get_image.php?issfid=${row.item.athlete_external_id}&width=30)`, border: ['1px solid rgb(105, 105, 105)'] }} />
            <div className={props.classNames.avatar_name}> {row.item.name} </div>
        </div>
    )
}

export function renderAthleteRow(row, col, props, content) {
    if (row.item.athlete_id) {
        return (
            <Link to={athletePage.getPath({ id: row.item.athlete_id })} className={props.classNames.nameInner}>
                {content}
            </Link>
        )
    }
    return content
}

export function renderAthleteRowId(row, col, props, content) {
    if (row.item.id) {
        return (
            <Link to={athletePage.getPath({ id: row.item.id })} className={props.classNames.nameInner}>
                {content}
            </Link>
        )
    }
    return content
}