import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container:{
        margin: [1, 'auto'],
        width: '500px',
        borderRadius: '8px',
        background: '#fafafa',
        transition: 'transform 0.2s ease 0s, background 0.2s ease 0s',
        display: 'flex',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 10px -3px #dddddd',
            background: '#fff'
        }
    },
    inner: {
        padding: [0.5, 1]
    },
    name: {
        ...theme.typo.title,
        fontSize: 1.5
    }
}))