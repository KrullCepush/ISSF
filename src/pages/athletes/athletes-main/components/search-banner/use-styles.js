import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px dashed #CECECE',
        color: '#99A1A3',
        borderRadius: 0.25,
        minHeight: 5,
        flexGrow: 1,
        padding: 3,
        textAlign: 'center',
    }
}))