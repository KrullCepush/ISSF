import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    wrap: {
        flex: 1,
        display: 'flex',
        margin: [0, 'auto'],
        padding: [0, 1.7],
        width: '100%',
        boxSizing: 'border-box',
        maxWidth: '1440px',
        ['& &']: {
            margin: 0,
            padding: 0,
            flex: 1,
        },
        [theme.media.md_]: {
            ['& &']: {
                margin: 0,
                padding: [0, 4.7, 0, 4.7],
                flex: 1,
            }
        },
        [theme.media.xl_]: {
            width: '1440px'
        }
    },
    wrapColumn: {
        flexDirection: 'column',
    }
}));