import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    containerInfo: {
        width: "100%",
        margin: [2, 'auto'],
    },
    blockBio: {
        marginBottom: 1.5,
        position: 'relative',
        [theme.media._sm]: {
            marginBottom: 0.5,
        }
    },
    content: {
        height: '100%',
        marginLeft: 1
    },
    title: {
        ...theme.typo.title,
        fontFamily: 'ISSFFontBlack',
        fontSize: 0.625,
        color: '#676767',
        fontWeigth: 900,
        padding: [0.3, 0],
        position: 'relative',

    },
    value: {
        ...theme.typo.title,
        fontFamily: 'ISSFFont',
        fontSize: 1.25,
        color: '#1F2E3D',
        width: '80%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: '200px',
        ['&:before']: {
            width: 1,
            height: 1,
            content: '""',
            display: 'inline-block',
            backgroundColor: '#000',
            backgroundImage: `url(${require('../arrowLow.svg')})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            transform: 'rotate(270deg)',
            marginRight: 1,
            borderRadius: '50%'
        },
        [theme.media._sm]: {
            marginBottom: 1,
        }
    },
    provider: {
        position: 'relative',
    },
    button: {
        border: 'none',
        outline: 'none',
        width: '4rem',
        position: 'absolute',
        top: 0,
        zIndex: 10,
        height: '100%',
        background: 'none',
        backgroundImage: `url(${require('../arrow.svg')})`,
        backgroundColor: 'rgba(0, 0, 0, 0.7);',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        [theme.media._sm]: {
            backgroundColor: 'transparent',
        },
        '&[disabled]': {
            opacity: 0
        },
    },
    back: {
        left: -4,
        borderRadius: '20px 0 0 20px',
        [theme.media._sm]: {
            left: -3.5,
        }
    },
    next: {
        borderRadius: '20px 0 0 20px',
        transform: 'rotate(180deg)',
        right: 0,
        [theme.media._sm]: {
            right: 0,
        }
    },
    slider: {
        position: 'relative',
    },
    valueVisible: {
        border: '1px solid black',
        position: 'absolute',
        padding: 1,
        top: 1,
        left: 0,
        width: '80%',
        background: '#fff',
        fontFamily: 'ISSFFont',
        fontSize: 1.25,
        color: '#1F2E3D',
        zIndex: 100,
        textTransform: 'uppercase'
    }
}))