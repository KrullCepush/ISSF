import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    block: {
        marginTop: 1.5,
        display: 'flex',
        flexDirection: 'column',
        [theme.media.sm_]: {
            flexDirection: 'row',
        }
    },
    name: {
        marginBottom: 1, 
    },
    title: {
        ...theme.typo.title,
        fontSize: 1.5,
        textAlign: 'center',
        justifyContent: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.media._sm]: {
            ['&:after, &:before']: {
                display: 'block',
                content: '""',
                flexGrow: 1,
                alignSelf: 'center',
                height: '1px',
                background: theme.colors.primaryDark.string(),
            },
            ['&:after']: {
                marginLeft: 0.8
            },
            ['&:before']: {
                marginRight: 0.8
            }
        },
        [theme.media.sm_]: {
            width: 15,
            fontSize: 1.5,
            textAlign: 'right',
            justifyContent: 'flex-end',
            marginBottom: 0,
            ['&:after']: {
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
                background: theme.colors.white.string()
            }
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
    content: {
        flexGrow: 1,
    }
}));