import {createUseStyles} from 'react-jss';

export default createUseStyles(theme => ({
    competition: {
        display: 'grid',
        gridTemplateColumns: '6rem 1fr',
        gridGap: 0.5,
        padding: 0.75,
        borderRadius: 0.25,
        color: theme.colors.white.string(),

        background: '#FFA51E',
        boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.25)',
        textDecoration: 'none',

        transition: 'transform 0.1s ease-out 0s, boxShadow 0.1s ease-out 0s',
        '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 0 15px -5px #b3b3b3',
        }
    },
    info: {
        textAlign: 'right'
    },
    geo: {
        fontSize: 0.75,
        marginTop: 0.25,
        ['&:before']: {
            verticalAlign: 'bottom',
            content: '""',
            display: 'inline-block',
            width: 1,
            height: 1,
            marginRight: 0.25,
            background: {
                image: `url(${require('./location.svg')})`,
                size: 'contain'
            },

        }
    },
    title: {
        fontSize: 1.25
    },
}))