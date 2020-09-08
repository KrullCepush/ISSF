import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    wrapper: {
        marginTop: 1.5
    },
    title: {
        fontFamily: 'ISSFFontBlack',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 2,
        textTransform: 'uppercase',
        color: theme.colors.primaryDark.string(),
        marginBottom: 1
    },
    competitions: {
        display: 'grid',
        gridGap: 0.75
    }
}))