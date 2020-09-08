import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
    },
    content: {
        borderRadius: '10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
        width: '95%',
        margin: [0, 'auto'],
        backgroundColor: '#EEEEEE',
        boxSizing: 'border-box',

    },
    image: {
        width: '100%',
        height: '70%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left -10px',
        [theme.media._md]: {
            height: '60%',
        }
    },
    title: {
        fontFamily: 'ISSFFONT',
        color: '#2A3A43',
        fontSize: 1,
        padding: 0.5,
        boxSizing: 'border-box',
        width: '100%'
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

    },
    next: {
        borderRadius: '20px 0 0 20px',
        transform: 'rotate(180deg)',
        right: 0,
    },
    tray: {
        '&:after': {
            display: 'block',
            content: "''",
            clear: 'both'
        }
    },
    slider: {
        position: 'relative',
    },
}))