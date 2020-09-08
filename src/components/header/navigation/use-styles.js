import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
    navigation: {
        visibility: 'hidden',
        flexGrow: 1,
        [theme.media.md_]: {
            visibility: 'visible'
        }
    },
    menu: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: theme.header.height,
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    menuItemInner: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        '&:hover > $menuItemLink': {
            fontSize: 1.25,
            zIndex: 20,
        },
        '&:hover > $submenu': {
            display: 'flex',
        }
    },
    menuItemLink: {
        fontFamily: 'ISSFFontBlack',
        textDecoration: 'none',
        letterSpacing: 0,
        textTransform: 'uppercase',
        color: theme.colors.white.string(),
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
        '&.active': {
            width: '100%',
            fontSize: 1.25,
        },
        '&:hover:after, &.active:after': {
            width: '100%',
            fontSize: 1.25,
        }
    },
    submenu: {
        position: 'absolute',
        display: 'none',
        flexDirection: 'column',
        padding: [1, 1.625],
        paddingTop: 3,
        top: -1,
        background: theme.colors.gray.alpha(0.35).string(),
        borderRadius: 0.5,
        zIndex: 10,
        margin: [0, -1.625],
        animation: '$submenuIn .2s ease-in-out',
        backdropFilter: 'blur(15px)'
    },
    submenuItem: {
        marginTop: 0.8125,
        ['&:first-child']: {
            fontSize: 1.25,
            visibility: 'hidden',
            height: 0,
            margin: 0
        }
    },
    submenuItemLink: {
        fontFamily: 'ISSFFontBlack',
        textDecoration: 'none',
        letterSpacing: 0,
        textTransform: 'uppercase',
        color: theme.colors.white.string(),
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
    '@keyframes submenuIn': {
        '0%': {
            opacity: 0,
            display: 'none'
        },
        '1%': {
            opacity: 0,
            display: 'flex'
        },
        '100%': {
            opacity: 1,
        },
    },
    '@keyframes submenuOut': {
        '0%': {
            opacity: 1,
            display: 'flex'
        },
        '99%': {
            opacity: 0,
            display: 'flex'
        },
        '100%': {
            opacity: 0,
            display: 'none'
        },
    }
}));