import { createUseStyles } from 'react-jss';

const skew = -10;
const offset = 53;

export default createUseStyles(theme => ({
    container: {
        flex: 1,
        flexShrink: 0,
        margin: '0 0.25rem',
        position: 'relative',
        fontFamily: 'Arial Narrow',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        lineHeight: '0.9',
        width: 10,
        [theme.media.md_]: {
            width: 'auto'
        }
    },
    top: {
        display: 'flex',
        padding: [0.25, 0.1],
        transform: 'translateX(-5px)'
    },
    discipline: {
        flexGrow: 1,
        lineHeight: '1'
    },
    flag: {
        flexShrink: 0,
        display: 'flex',
        overflow: 'hidden',
        transform: 'skewX(-7deg)',
        borderRadius: '4px',
        justifyContent: 'center',
        boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.25)',
        width: 3,
        margin: [0, 0.2],
    },
    flagInner: {
        transform: 'scale(1.2) skewX(7deg)',
        width: '100%',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1'
    },
    score: {

    },
    country: {

    },
    imageContaier: {
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        transform: 'translateX(-20px) skewX(-7deg)',
        borderRadius: '6px',
        justifyContent: 'center',
        boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.25)',

        ['&:after']: {
            display: 'block',
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(15.15deg, #17282D 0%, rgba(23, 40, 45, 0.06) 50%)',
        }
    },
    image: {
        transform: 'scale(1.2) skewX(7deg)',
        width: '100%',
    },
    name: {
        color: theme.colors.white.string(),
        bottom: 0,
        zIndex: 1,
        position: 'absolute',
        fontSize: 1.25,
        lineHeight: '1.1',
        transform: 'translate(-2rem)',
        padding: 0.7,
        [theme.media.md_]: {
            fontSize: 1.75,
        }
    }
}))