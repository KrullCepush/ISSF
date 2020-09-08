import {createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: [0, 0, 3]
    },
    button: {
        color: theme.colors.primary.string(),
        lineHeight: 1.25,
        backgroundRepeat: 'no-repeat'
    },
    prev: {
        paddingLeft: 1.25,
        backgroundPosition: 'left center',
        backgroundImage: `url(${require('./chevron-left.svg')})`,
    },
    next: {
        paddingRight: 1.25,
        backgroundPosition: 'right center',
        backgroundImage: `url(${require('./chevron-right.svg')})`,
    }
}))