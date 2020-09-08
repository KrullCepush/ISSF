import { createUseStyles } from 'react-jss';

const size = 1.5

export default createUseStyles(theme => ({
    container: {
        display: 'flex',
        borderRadius: 0.5,
        padding: [0.5, 0, 0.5, 3.5],
        margin: [1, 0]
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 1,
    },
    title: {
        fontSize: 1.3,
    },
    info: {
        fontSize: 0.9375,
        fontWeight: '900',
        color: '#2A3A43',
        marginBottom: 0.5

    }
}))