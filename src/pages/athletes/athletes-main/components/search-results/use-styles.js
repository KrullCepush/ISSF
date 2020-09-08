import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
    },
    table: {
        width: '100%',
        minWidth: 'max-content',
        [theme.media.sm_]: {
            minWidth: '600px',
        }
    },
    thead: {},
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
        },
    },
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
    world_rank_and_last_name: {
        // width: 6,
        width: '10%',
        ['&$td']: {
            '& a': {
                margin: 0,
                padding: 0,
                paddingLeft: 1,
            }
        }
    },
    avatar: {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundPosition: 'center',
        borderRadius: '50%',
        backgroundSize: 'cover',
        marginRight: 0.5,
        border: ['1px solid rgb(105, 105, 105)']
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
        textAlign: 'right',
        ['&$td']: {
            color: '#797979'
        },
        '& a': {
            justifyContent: 'flex-end',
            paddingRight: 1
        }
    },
    birthday: {
        width: '12%',
        textAlign: 'right',
        ['&$td']: {
            color: '#797979'
        },
        '& a': {
            justifyContent: 'flex-end',
            paddingRight: 1
        }
    },
    discipline: {
        width: '19%',
        textAlign: 'right',
        ['&$td']: {
            justifyContent: 'flex-end',
            paddingRight: 1,
            '& a': {
                justifyContent: 'flex-end',
                paddingRight: 1
            }
        }
    },
}))