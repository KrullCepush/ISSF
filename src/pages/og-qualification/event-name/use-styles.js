import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    desc: {
        fontSize: 1.25,
        fontFamily: 'ISSFFONT',
        fontWeight: 500,
        marginBottom: 2
    },
    wrapperEvent: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    navEvent: {
        fontSize: 1.25,
        textTransform: 'uppercase',
        fontWeight: 900,
        textAlign: 'right',
        marginBottom: 1,
        cursor: 'pointer',
        fontFamily: 'ISSFFontBlack'
    },
    table: {
        width: '100%',
        minWidth: '600px',
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
        },
    },
    th: {
        textAlign: 'left',
        height: 2.5,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'middle',
        fontFamily: 'ISSFFont',
        fontWeight: 'normal',
        fontSize: 0.625,
        textTransform: 'uppercase',
        color: '#676767',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        }
    },
    tr: {
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
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginRight: 0.5
    },
    last_name: {
        textAlign: 'left',
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
        textAlign: 'center',
        display: 'flex',
    },

    nation: {
        alignItems: 'center',
        fontSize: 0.6,
        ['&$td']: {
            color: '#2A3A43',
            fontSize: 1,
        }
    },
    championship: {
        fontWeight: 900,
        color: '#000',
        fontSize: 0.6,
        ['&$td']: {
            color: '#797979',
            fontWeight: 'normal',
            fontSize: 1,
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
            fontSize: 1,
        }
    },
    location: {
        fontWeight: 900,
        fontSize: 0.6,
        color: '#000',
        ['&$td']: {
            color: '#797979',
            fontWeight: 'normal',
            fontSize: 1,
        }
    },
    nation: {
        textAlign: 'left',
        fontWeight: 900,
        fontSize: 0.6,
        color: '#000',
        ['&$td']: {
            color: '#797979',
            fontWeight: 'normal',
            fontSize: 1,
        }
    },
    block: {
        margin: [1.5, 0],
        display: 'flex',
        flexDirection: 'column',
        [theme.media.sm_]: {
            flexDirection: 'row',
        }
    },
    title: {
        ...theme.typo.title,
        color: '#A3A8AB',
        fontSize: 1.5,
        textAlign: 'right',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: 1,
        [theme.media.sm_]: {
            width: 15,
            fontSize: 1.5,
            textAlign: 'right',
            justifyContent: 'flex-end',
            marginBottom: 1,
        }
    },

    bracket: {
        [theme.media.sm_]: {
            width: 0.5,
            borderWidth: '3px 0 3px 3px',
            borderStyle: 'solid',
            borderRadius: '5px 0 0 5px',
            margin: [0, 2]
        }
    },
    activeTitle: {
        color: '#000',
        ...theme.typo.title,
        fontSize: 1.5,
        textAlign: 'right',
        position: 'relative',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: 1,
        [theme.media.sm_]: {
            width: 15,
            fontSize: 1.5,
            textAlign: 'right',
            justifyContent: 'flex-end',
            marginBottom: 1,
            ['&:after']: {
                ...theme.typo.title,
                width: '8px',
                height: '8px',
                content: '""',
                display: 'block',
                background: 'rgb(204, 204, 204)',
                borderStyle: 'solid',
                borderWidth: '0 0 3px 3px',
                alignSelf: 'center',
                transform: 'translateX(2.3rem) rotateZ(45deg)',
                boxSizing: 'border-box',
                position: 'absolute',
                right: 0,
                bottom: 1.5,
                background: theme.colors.white.string()
            }
        }
    }
}))