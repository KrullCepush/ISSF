import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        fontSize: 1.5625
    },
    title: {
        fontSize: 1.25,
        marginBottom: 0.5,
        textTransform: 'capitalize',
        paddingLeft: 1.5,
        marginLeft: -1.5,
        backgroundPosition: 'left 3px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1rem',
    },
    subtitle: {
        fontSize: 1
    }
}));