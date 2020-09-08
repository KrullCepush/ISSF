import { createUseStyles } from 'react-jss';

function round(rad) {
    return {
        borderRadius: rad,
        width: rad*2,
        height: rad*2
    }
}

export default createUseStyles(theme => ({
    header: {
        display: 'flex',
        margin: {
            left: -1.25,
            right: -1.25,
            bottom: -3
        },
        padding: [1.25, 1.25, 0],
        background: theme.colors.white.string(),
        flex: 1,
        borderRadius: 0.5,
        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)',
        width: '100%',
        boxSizing: 'content-box',
        [theme.media.md_]: {
            margin: [0.5, -3.125, -3.5],
            padding: [1.25, 3.125, 0],
        }
    },
    left: {
        width: '100%',
        [theme.media.lg_]: {
            flexGrow: 1,
            width: 'auto',
        }
    },
    right: {
        display: 'none',
        [theme.media.lg_]: {
            display: 'flex',
            justifyContent: 'flex-end',
        }
    },
    title: {
        ...theme.typo.title,
        fontSize: 1.5,
        [theme.media.md_]: {
            fontSize: 2.5,
        }
    },
    props: {
        ...theme.typo.title,
        ['& > span']: {
            marginRight: 1.5
        },
        [theme.media.md_]: {
            fontSize: 1.25,
        }
    },
    navigationContainer: {
        maxWidth: '100%',
        overflowX: 'auto',
        flexGrow: 1
    },
    navigation: {
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'auto auto auto auto auto',
        marginTop: 1,
    },
    navItem: {
        display: 'flex'
    },
    navItemLink: {
        ...theme.typo.title,
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none',
        color: theme.colors.primary.string(),

        color: '#0E77B1',
        lineHeight: '3.5',
        whiteSpace: 'nowrap',
        ['&.active:after']: {
            display: 'block',
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '6px',
            width: '100%',
            backgroundColor: theme.colors.primary.string(),
            borderRadius: [4, 4, 0, 0]
        },
        ['&.disabled']: {
            pointerEvents: 'none',
            color: theme.colors.grayLighter.string()
        }
    },
    logo: {
        ...round(1),
        marginLeft: 1,
        boxSizing: 'border-box',
        backgroundSize: 'cover',
        fontSize: 0,
        [theme.media.md_]: round(3),
        [theme.media.xl_]: round(4),
        ['&._empty']: {
            display: 'none',
            [theme.media.md_]: {
                display: 'block',
                border: '1px dashed #ccc',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                color: theme.colors.black.alpha(0.4).string(),
                padding: '2rem',
                fontSize: 0.7
            }
        }
    },
    info: {
        display: 'flex',
    },
    infoLeft: {
        flexGrow: 1
    },
    infoRight: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        flexShrink: 0,
        [theme.media.lg_]: {
            display: 'none',
        }
    }
}))