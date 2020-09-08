import { createUseStyles } from 'react-jss';

const size = 1.5

export default createUseStyles(theme => ({
    container: {
        display: 'flex',
        border: '1px dashed #2A3A43',
        borderRadius: 0.5,
        background: {
            image: `url(${require('./download-icon.svg')})`,
            repeat: 'no-repeat',
            position: `${size}rem center`,
            seze: `${size}rem`
        },
        padding: [0.5, 0, 0.5, 3.5],
        margin: [1, 0]
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 1
    },
    title: {
        fontSize: 1.5625,
        color: '#2A3A43',
        marginBottom: 0.5
    },
    info: {
        fontSize: 0.9375,
        color: '#2A3A43'
    }
}))