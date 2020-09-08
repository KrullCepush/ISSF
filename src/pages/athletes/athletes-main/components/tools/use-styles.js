import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    form: {
        flexGrow: 1,
        display: 'grid',
        gridGap: 1,
        margin: [1, 0],
        [theme.media.md_]: {
            gridTemplateColumns: '1fr auto auto',
        },
        [theme.media.lg_]: {
            margin: {
                left: 5
            },
        }
    },
    input: {
        border: 'none',
        borderBottom: '1px solid #8D8D8D',
        padding: 0,
        outline: 'none',
        fontSize: 1,
        lineHeight: '2.4'
    },
    
}))