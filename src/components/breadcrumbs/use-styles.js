import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    breabcrumbs: {
        marginTop: 2,
        fontSize: 0.75
    },
    list: {
        display: 'flex',
        [theme.media._sm]: {
            flexWrap: 'wrap'
        }
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        minHeight: 2,
        ['&:after']: {
            display: 'block',
            content: '"/"',
            margin: [0, 0.4]
        },
        [theme.media._sm]: {
            minHeight: 1.5,
        }
    },
    home: {
        
    },
    white: {
        display: 'flex',
        color: 'white'
    },
    homeIcon: {
        display: 'flex',
    }
}))