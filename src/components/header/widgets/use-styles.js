import {createUseStyles} from 'react-jss';

export default createUseStyles(theme => ({
    widgets: {
        flex: 1,
        margin: [0, -0.75],
        [theme.media.md_lg]: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        [theme.media.md_]: {
            display: 'flex'
        }
    }
}));