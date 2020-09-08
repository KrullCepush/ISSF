import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        display: 'flex',
        padding: [1, 0],
        flexDirection: 'column',
        [theme.media.lg_]: {
            flexDirection: 'row'
        }
    },
    title: {
        ...theme.typo.title,
        fontSize: 2,
        minWidth: '30%'
    }
}));