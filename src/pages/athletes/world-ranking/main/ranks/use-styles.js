import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        overflowX: 'auto'
    },
    table: {
        width: '100%',
    },
    thead: {},
    tbody: {},
    th: {
        textAlign: 'left',
        height: 2.5,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'middle',
        fontFamily: 'ISSFFontBlack',
        fontWeight: 900,
        fontSize: 0.625,
        textTransform: 'uppercase',

        color: '#676767',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        }
    },
    tr: {},
    td: {
        color: '#1F2E3D',
        height: 3.625,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'middle',
        fontSize: 1.125, 
        fontWeight: '500',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        }
    },
    rank: {
        width: 6,
        width: '10%'
    },
    avatar: {
        display: 'inline-block',
        width: 2,
        height: 2,
        borderRadius: 1,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginRight: 0.5
    },
    last_name: {
        width: '40%',
    },
    nameInner: {
        display: 'flex',
        alignItems: 'center'
    },
    country: {
        width: '10%',
        ['&$td']: {
            color: '#2A3A43'
        }
    },
    gender: {
        width: '10%',
        textAlign: 'center',
        ['&$td']: {
            color: '#797979'
        }
    },
    athlete_birth_year: {
        width: '12%',
        textAlign: 'right',
        ['&$td']: {
            color: '#797979'
        }
    }
}))