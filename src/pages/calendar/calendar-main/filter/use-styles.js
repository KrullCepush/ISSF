import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    filter: {
        position: 'relative',
        background: theme.colors.primaryDark.string(),
        borderRadius: 0.5,
        padding: 1,
        marginTop: 1,
        display: 'none',
        '&._mobile': {
            display: 'block',
        },
        [theme.media.md_]: {
            display: 'block',
            '&._mobile': {
                display: 'none',
            },
        },
    },
    filterMobile: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: theme.colors.white.alpha(0.8).string(),
        zIndex: 10,
        padding: [3, 0],
        textAlign: 'right',
    },
    mobileClose: {
        position: 'relative',
        right: 0,
    },
    title: {
        fontFamily: 'ISSFFontBlack',
        position: 'absolute',
        top: -1,
        right: 1,
        background: theme.colors.primaryDark.string(),
        borderRadius: 0.5,
        padding: [0.5, 0.7, 0],
        textTransform: 'uppercase',
        color: theme.colors.white.string(),
    },
    buttons: {
        margin: '-5px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    checkbox: {
        display: 'none',
    },
    button: {
        display: 'block',
        margin: '5px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: theme.colors.white.string(),
        color: theme.colors.white.string(),
        padding: [0, 1, 0, 1.5],
        lineHeight: 1.375,
        borderRadius: 0.7,
        backgroundPosition: '5px center',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        fontSize: 0.7,
        ['&.color_1']: {
            color: theme.colors.filterRed.string(),
            backgroundImage: `url(${require('./check-mark-1.svg')})`,
        },
        ['&.color_2']: {
            color: theme.colors.filterBlue.string(),
            backgroundImage: `url(${require('./check-mark-2.svg')})`,
        },
        ['&.color_3']: {
            color: theme.colors.filterOrange.string(),
            backgroundImage: `url(${require('./check-mark-3.svg')})`,
        },
        ['&.color_4']: {
            color: theme.colors.filterGray.string(),
            backgroundImage: `url(${require('./check-mark-4.svg')})`,
        },
        [':checked + &']: {
            color: theme.colors.primary.string(),
            backgroundColor: theme.colors.white.string(),
            backgroundImage: `url(${require('./cancel.svg')})`,
            backgroundPosition: '10px center',
            ['&.color_1']: {
                backgroundColor: theme.colors.filterRed.string(),
                color: theme.colors.white.string(),
            },
            ['&.color_2']: {
                backgroundColor: theme.colors.filterBlue.string(),
                color: theme.colors.white.string(),
            },
            ['&.color_3']: {
                backgroundColor: theme.colors.filterOrange.string(),
                color: theme.colors.white.string(),
            },
            ['&.color_4']: {
                backgroundColor: theme.colors.filterGray.string(),
                color: theme.colors.white.string(),
            },
        },
    },
}));
