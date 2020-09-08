import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    drawer: {
        backdropFilter: 'blur(5px)',
        background: 'rgba(49, 49, 49, 0.85)',
        width: '100%',
        display: 'flex',
        boxShadow: '0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24)',
        overflow: 'auto',
        borderRadius: '8px',
    },
    drawerOverlay: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.35)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: 998
    },
    drawerContainer: {
        overflow: 'auto',
        right: 0,
        top: '100%',
        position: 'absolute',
        zIndex: 999,
        boxSizing: 'border-box',
        width: theme.media.xs * 0.9 + 'px'
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        margin: '42px 26px',
    },
    menuItem: {
        display: 'flex',
        marginBottom: 2,
        color: 'white',
        '&:last-child': {
            marginBottom: 0
        },
        '&._active $submenu': {
            height: 'auto',
            transition: 'height 1s ease-out 1s;'
        },
        [theme.media.md_]: {
            display: 'none',
            '&._hamburger-only': {
                display: 'flex'
            }
        }
    },
    menuItemLink: {
        fontSize: '18px',
        fontFamily: 'ISSFFontBlack',
        textDecoration: 'none',
        letterSpacing: 0,
        textTransform: 'uppercase',
        color: 'white',
        position: 'relative',
        display: 'inline-block',
        '&:after': {
            display: 'block',
            content: '""',
            width: 0,
            height: '2px',
            background: theme.colors.white.string(),
            transition: 'width 0.2s ease-out 0s;'
        },
        '&:hover:after, &.active:after': {
            width: '100%',
        }
    },
    submenu: {
        overflow: 'hidden',
        height: 0,
        marginLeft: 1.5,
        transition: 'height 1s ease-out 1s;'
    },
    submenuItemLink: {
        fontSize: '18px',
        marginTop: 1,
        fontFamily: 'ISSFFontBlack',
        textDecoration: 'none',
        letterSpacing: 0,
        textTransform: 'uppercase',
        color: 'white',
        whiteSpace: 'nowrap',
        display: 'inline-block',
        '&:after': {
            display: 'block',
            content: '""',
            width: 0,
            height: '2px',
            background: theme.colors.white.string(),
            transition: 'width 0.2s ease-out 0s;'
        },
        '&:hover:after': {
            width: '100%',
        }
    },
}))