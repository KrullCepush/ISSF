import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        padding: [0.375, 0],
    },
    th: {
        display: 'flex',
        alignItems: 'center',
    },
    td: {
        display: 'flex',
        alignItems: 'center',
    },
    grid: {
        display: 'grid',
        gridGap: 0.7,
        gridTemplateColumns: '1fr 4fr 3rem 0 0',

        padding: [0.375, 0, 0, 0],
        [theme.media.md_]: {
            gridTemplateColumns: '9rem 21rem 1fr 1fr 1fr',
        },
        '$head &': {
            display: 'none',
            [theme.media.md_]: {
                display: 'grid',
            },
        },
    },
    stage: {
        display: 'grid',
        gridGap: '0.5rem',
        gridAutoFlow: 'column',
    },
    g2CSE: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    },
    series: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        alignItems: 'center',
        '&$td': {
            opacity: 0.6,
            fontSize: 0.7,
            [theme.media.md_]: {
                fontSize: 1,
                opacity: 1,
            },
        },
    },
    score: {
        textAlign: 'center',
    },
    shots: {
        display: 'grid',
        marginTop: 0.25,
        gridGap: '1px',
        gridAutoFlow: 'column',
    },
    shot: {
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        fontSize: 0,
        border: `1px solid ${theme.colors.primary.string()}`,
        '&[data-value="0"]': {
            background: theme.colors.primary.string(),
        },
    },
    total: {
        justifyContent: 'flex-end',
        '&$td': {
            alignItems: 'center',
            [theme.media.md_]: {
                fontSize: 1,
            }
        }
    },
    remarks: {
        display: 'none',
        [theme.media.md_]: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    },
    targets: {
        display: 'none',
        [theme.media.md_]: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    },
}));
