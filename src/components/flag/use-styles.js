import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    wrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    code: {
        fontSize: 0.8,
        marginLeft: 0.3,
        ...theme.typo.italic,
        fontWeight: 600
    },
    container:{
        transform: `skew(-5deg) scaleX(0.9)`,
        boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.38)',
        display: 'flex',
        overflow: 'hidden',
        justifyContent: 'center',
        borderRadius: '2px',
        width: (({width}) => width + 'px'),
    },
    image:{
        transform: `skew(5deg) scaleX(1.1)`,
        display: 'flex',
    }
}));