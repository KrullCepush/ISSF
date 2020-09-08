import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        padding: [0.375, 0]
    },
    th: {
        display: 'flex',
        alignItems: 'center'
    },
    td: {
        display: 'flex',
        alignItems: 'center'
    },
    grid: {
        display: 'grid',
        gridGap: 0.5,
        gridTemplateColumns: '1fr 3rem 3rem 0 0',

        [theme.media.md_]: {
            '&.skeet': {
                gridTemplateColumns: '30rem 1fr 5rem',
            },
            '&.trap': {
                gridTemplateColumns: '36rem 1fr 5rem',
            },
        },
        '$head &': {
            display: 'none',
            [theme.media.md_]: {
                display: 'grid',
            }
        }
        
    },
    rounds: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        '&$td': {
            display: 'grid',
            gridGap: 0.125,
            opacity: 0.6,
            fontSize: 0.7,
            '&.skeet': {
                gridTemplateColumns: 'repeat(20, auto)',
            },
            '&.trap': {
                gridTemplateColumns: 'repeat(25, auto)',
            },
            [theme.media.md_]: {
                fontSize: 1,
                opacity: 1,
            }
        }
    },
    round: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '12px',
        height: '20px',
        border: `2px solid ${theme.colors.primary.string()}`,
        borderRadius: '3px',
        fontSize: 0,
        flex: 1,

        '&[data-score="1"]': {
            background: theme.colors.primary.string()
        },
        '&._offset': {
            marginLeft: '18px'
        }
    },
    total: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '&$td': {
            [theme.media.lg_]: {
                fontSize: 1.5,
            }
        }
        
    },
    remarks: {
        display: 'none',
        [theme.media.md_]: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    },
    targets: {
        display: 'none',
        [theme.media.md_]: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
}))