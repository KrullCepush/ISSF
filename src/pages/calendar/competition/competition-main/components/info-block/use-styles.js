import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    infoBlock: {
        flex: 1
    },
    title: {
        ...theme.typo.title,
        fontSize: 2,
        marginBottom: 1,
        [theme.media.lg_]: {
            marginBottom: 2,
        }
    }
}))