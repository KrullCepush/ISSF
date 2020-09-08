import { createUseStyles } from 'react-jss';
import { relative } from 'path';

export default createUseStyles(theme => ({
    worldRankingTitle: {
        fontFamily: 'ISSFFontBlack',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 2,
        textTransform: 'uppercase',
        color: '#2A3A43',
        padding: [3, 0, 0, 0],
    },
    athlets: {
        margin: [2, 0],
        display: 'flex',
        overflowX: 'auto'
        // margin: [0, -1]
    },
    loadMoreContainer: {
        margin: [1, 0],
        textAlign: 'center',
    },
    federationWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: "space-between",
        minHeight: '75vh',
        width: '100%',
    },
    federationWrapperStructure: {
        width: "75%",
        [theme.media._lg]: {
            width: "100%",
        },

    },
    federationWrapperNavigation: {
        width: "25%",
        margin: {
            left: 2
        },
        zIndex: 9999,
        [theme.media._lg]: {
            overflow: 'auto',
            display: "none",
            position: 'absolute',
            backgroundColor: 'rgba(49, 49, 49, 0.85)',
            borderRadius: '8px',
            width: '50%',
            margin: {
                left: 0,
                top: -2
            },
            padding: [1.3, 0]

        },
        [theme.media._md]: {
            height: '58vh',
            width: '100%',
        },
    },
    wrapItemLink: {
        margin: {
            bottom: 0.7
        },
        boxSizing: 'border-box',
    },
    navItemLink: {
        textTransform: 'capitalize',
        fontStyle: 'normal',
        fontFamily: 'ISSFFontBlack',
        color: '#808080',
        textDecoration: 'none',

        fontSize: 1,
        fontWeight: 900,
        lineHeight: "180%",
        padding: {
            left: 2,
        },
        boxSizing: 'border-box',
        display: 'block',
        // whiteSpace: 'nowrap',
        [theme.media._lg]: {
            lineHeight: "160%",
            color: '#ababab',
            fontWeight: 600,
            fontSize: 1.43,

        },
        [theme.media._md]: {
            whiteSpace: 'normal',
        },
        [theme.media._sm]: {
            padding: {
                right: 2,
                left: 2,
            },
        },
        '&:hover, &.active': {
            color: '#000',
            lineHeight: "180%",
            fontFamily: 'ISSFFontBlack',
            fontWeight: 900,
            fontSize: 1,
            transition: ["fontWeight", "borderLeft"],
            transitionDuration: 400,
            [theme.media._lg]: {
                color: '#fff',
                lineHeight: "160%",
                fontSize: 1.43,
            },
            [theme.media._md]: {
                whiteSpace: 'normal',
            },


        },
        "&.active": {
            lineHeight: "180%",
            borderLeft: '6px solid',
            fontSize: 1,
            borderColor: theme.colors.primaryDark.string(),
            padding: {
                left: '1.5rem'
            },
        },
    },
    issfWrapBreacrumbs: {
        margin: {
            bottom: 2,
        },
    },
    issfDisplayActive: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 1,
    },
    federationSwitcherNavActive: {
        display: 'block'
    },
    navigationWrapp: {
        display: 'none',
        fontWeight: 900,
        color: '#0E77B1',
        cursor: 'pointer',
        width: '100%',
        borderBottom: ['2px', 'solid', '#C4C4C4'],
        margin: {
            bottom: 2
        },
        padding: {
            bottom: 0.5
        },
        zIndex: 9999,
        [theme.media._lg]: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    navigationHeader: {
        fontFamily: 'ISSFFontBlack',
        textTransform: 'uppercase',
        fontWeight: 900,
        fontSize: 1
    },
    navigationSVG: {
        background: {
            image: `url(${require('./icon.svg')})`,
            repeat: 'no-repeat',
            position: 'center',
        },
        width: 1.2,
        height: 1.2,
        marginRight: 0.5
    }
}))