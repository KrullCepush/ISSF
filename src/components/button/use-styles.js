import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    button: {
        cursor: 'pointer',
        border: 'none',
        lineHeight: 2.5,
        borderRadius: 1.25,
        background: '#666666',
        padding: [0, 2],
        minWidth: 3,
        fontSize: 1.25,
        color: theme.colors.white.string(),
        outline: 'none'
    }
}))