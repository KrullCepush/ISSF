import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles(theme => ({
    row: {
        margin: [0, -0.5],
        [theme.media.lg_]: {
            borderBottom: '1px solid #DEDEDE',
            '&._last_in_team': {
                borderBottom: '1px solid #BBBBBB',
            }
        }
    }
}))

const useColStyles = createUseStyles(theme => {
    return ({
        col: {
            display: 'flex',
            flexDirection: 'column',
            gridArea: ((props) => props.area),
            alignItems: ((props) => props.alignItems),
            justifyContent: ((props) => props.justifyContent),
            overflow: 'hidden',
        },
        title: {
            display: 'none',
            '._row:first-child &': {
                ...theme.typo.title,
                display: 'flex',
                height: 2,
                height: 2,
                fontSize: 0.625,
                color: '#676767',
                alignItems: 'inherit',
                justifyContent: 'inherit',
                flexDirection: 'column',
                padding: [0, 0.5],
                width: '100%',
                [theme.media.lg_]: {
                    borderBottom: '1px solid #BBBBBB',
                }
            }
        },
        body: {
            flex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'inherit',
            justifyContent: 'inherit',
            flexDirection: 'column',
            padding: 0.5,
            boxSizing: 'border-box',
        }
    })
});

export function Row(props) {
    const jss = useStyles()
    return (
        <div className={clsx(jss.row, props.className, '_row', props.lastInTeam && '_last_in_team')}>
            {props.children}
        </div>
    );
}

export function Col(props) {
    const jss = useColStyles(props)
    return (
        <div className={clsx(jss.col, props.styles.col, props.className, !props.children && '_empty')} title={typeof props.title === 'string' ? props.title : undefined}>
            <div className={clsx(jss.title, props.styles.title, props.titleClassName)}>
                {props.title}
            </div>
            <div className={clsx(jss.body, props.styles.body, props.bodyClassName)}>
                {props.children}
            </div>
        </div>
    )
}

Col.defaultProps = {
    styles: {},
    alignItems: 'flex-start',
    justifyContent: 'center'
}