import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container:{},
    title: {
        ...theme.typo.title,
        fontSize: 2,
        textTransform: 'none',
        margin: {
            top: 2,
            bottom: 1
        }
    }
}))