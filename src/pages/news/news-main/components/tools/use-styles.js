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
    select: {
        minWidth: 10,
        border: '1px solid #8D8D8D',
        borderRadius: '4px',
        padding: [0, 2, 0, 0.5],
        position: 'relative'
    },
    selectLabel: {
        lineHeight: 2.4,
    },
    selectTitle: {
        position: 'absolute',
        backgroundColor: theme.colors.white.string(),
        left: 0.3,
        top: -0.4,
        padding: [0, '4px'],
        lineHeight: '1',
        ...theme.typo.title,
        fontSize: 0.625,
        color: '#676767',
    }
}))