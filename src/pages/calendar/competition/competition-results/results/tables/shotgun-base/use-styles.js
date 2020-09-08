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
            gridTemplateColumns: '20rem 1fr 5rem 5rem 5rem',
        },
        '$head &': {
            display: 'none',
            [theme.media.md_]: {
                display: 'grid',
            }
        }
        
    },
    series: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        '&$td': {
            opacity: 0.6,
            fontSize: 0.7,
            [theme.media.md_]: {
                fontSize: 1,
                opacity: 1,
            }
        }
    },
    seriesItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
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