import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({

    container: {
        margin: [0, 'auto'],
        width: '100%',
        marginBottom: 2,
        [theme.media._md]: {
            width: '80%',
            margin: [0, 'auto']
        },
        [theme.media._sm]: {
            marginLeft: 1.5,
            width: '100%'
        },
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: 2,
        [theme.media._sm]: {
            marginLeft: -2,
        }
    },
    headerLink: {
        paddingRight: 2,
        fontSize: 1.7,
        fontFamily: 'ISSFFontBlack',
        color: 'rgb(14, 119, 177)',
        alignSelf: 'center',
        cursor: 'pointer',
        ['&:last-child']: {
            paddingRight: 0,
        }
    },
    disabled: {
        color: 'gray',
        cursor: 'default'
    },
    activeLink: {
        fontSize: 1.875,
        color: '#2A3A43',

    },
    content: {},
    disable: {
        display: 'none'
    },
}))