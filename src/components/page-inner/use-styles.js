import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    pageInner: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: {
            bottom: 1
        }
    },
}));