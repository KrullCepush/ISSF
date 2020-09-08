import {createUseStyles} from 'react-jss';
import { inherits } from 'util';

export default createUseStyles(theme => ({
    navigationContainer: {
        display: 'flex',
        [theme.media._md]: {
        flexWrap: 'wrap',
        marginTop: 2,
        }
    },
    delimeter: {
        ...theme.typo.title,
        fontSize: 2,
        margin: [0, 0.5]
    },
    link: {
        ...theme.typo.title,
        fontSize: 2,
        textTransform: 'uppercase',
        color: theme.colors.primaryDark.alpha(0.6).string(),
        ['&.active']: {
            color: theme.colors.primaryDark.string(),
        }
    }

}))