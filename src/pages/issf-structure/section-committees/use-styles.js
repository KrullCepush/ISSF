import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: ' column',
        width: '100%',
        margin: [5.5, 0]
    },
    pageTitle: {
        fontFamily: 'ISSFFontBlack',
        fontSize: 1.9,
        marginBottom: 1.4,
    }, 
    link: {
        marginBottom: 1.5,
        fontSize: 0.8
    },
}))