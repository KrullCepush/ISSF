import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
    },
    desc: {
        fontSize: 1.25,
        fontFamily: 'ISSFFONT',
        fontWeight: 500,
        marginBottom: 2
    },
    table: {
        width: '100%',
        minWidth: '600px'
    },
    thead: {
        '& th': {
            cursor: 'default'
        }

    },
    tbody: {
        '& tr': {
            [theme.media.lg_]: {
                '&:hover': {
                    background: '#fff',
                    transform: 'scale(1.075)',
                    boxShadow: '0 0 15px -5px #b3b3b3',
                    borderRadius: 0.5,
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    transition: '0.2s ease-out',
                }
            }
        }
    },
    th: {
        textAlign: 'left',
        height: 2.5,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'middle',
        fontFamily: 'ISSFFont',
        fontWeight: 900,
        fontSize: 0.625,
        textTransform: 'uppercase',
        color: '#676767',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        },

    },
    tr: {
        border: 0,
    },
    td: {
        fontFamily: 'ISSFFont',
        color: '#1F2E3D',
        height: 3.625,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'middle',
        fontSize: 1.125,
        fontWeight: '500',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        },
        '& a': {
            fontFamily: 'ISSFFont',
            color: '#1F2E3D',
            height: 3.625,
            verticalAlign: 'middle',
            fontSize: 1.125,
            fontWeight: '500',
            paddingRight: 2,
            ['&:last-child']: {
                padding: 0
            }
        }
    },
    avatar: {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginRight: 0.5
    },
    last_name: {
        fontWeight: 900,
        fontSize: 0.6,
        color: '#000',
    },
    WrapRowName: {
        width: '100%',
        color: '#1F2E3D',
        fontSize: 1.25,
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
    },
    nameInner: {
        display: 'flex',
        alignItems: 'center'
    },
    location: {
        fontSize: 0.6,
        textAlign: 'center',
        fontWeight: 900,
        color: '#000',
        ['&$td']: {
            color: '#797979',
            fontWeight: 'normal',
            fontSize: 1
        }
    },
    discipline: {
        textAlign: 'left',
        fontSize: 0.6,
        fontWeight: 900,
        color: '#000',
        ['&$td']: {
            color: '#797979',
            fontWeight: 'normal',
            fontSize: 1
        }
    },
    year: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 0.6,
        color: '#000',
        ['&$td']: {
            color: '#797979',
            fontWeight: 'normal',
            fontSize: 1
        }
    },
    championship: {
        textAlign: 'right',
        fontWeight: 900,
        color: '#000',
        fontSize: 0.6,
        ['&$td']: {
            color: '#797979',
            fontWeight: 'normal',
            fontSize: 1,
        }
    },
}))