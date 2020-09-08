import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        flex: 1,
        display: 'flex',
        minHeight: 4,
    },
    col: {
        display: 'flex',
    },
    athlete: {
        display: 'grid',
        flex: 1,
        gridTemplateColumns: '2rem 2.5rem 2rem 1fr 3rem',
        gridGap: 0.5,
        transition: 'transform 0.1s ease-out 0s, boxShadow 0.1s ease-out 0s',
        alignItems: 'center',
        transform: 'scale(1)',
        boxShadow: '0 0 0px 0px #b3b3b3',
        'a&': {
            height: 4,
            alignSelf: 'center',
            background: '#F0F0F0',
            margin: [0, -1.7],
            padding: [0.375, 1.7],
            [theme.media.md_]: {
                margin: [0, -6.4],
                padding: [0.375, 6.4],
            },
            [theme.media.lg_]: {
                background: 'none',
                margin: [0, -1],
                padding: [0.375, 1],
                '&:hover': {
                    background: '#fff',
                    transform: 'scale(1.1)',
                    boxShadow: '0 0 15px -5px #b3b3b3',
                    borderRadius: 0.5,
                },
            },
        },
    },
    avatarHead: {
        display: 'inline-flex',
    },
    avatar: {
        display: 'inline-flex',
        width: 2,
        height: 2,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '50%',
    },
    name: {
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap'
    },
    country: {
        justifyContent: 'flex-end',
        [theme.media.lg_]: {
            justifyContent: 'flex-start',
        },
    },
}));
