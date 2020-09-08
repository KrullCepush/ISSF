import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    th: {
        display: 'flex',
        alignItems: 'center'
    },
    td: {
        display: 'flex',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        padding: [0.5, 0]
    },
    grid: {
        display: 'grid',
        gridGap: 0.5,
        gridTemplateColumns: '1fr 4fr 3rem 0 0',

        [theme.media.md_]: {
            gridTemplateColumns: '6rem 21rem 1fr 1fr 1fr',
        },
        '$head &': {
            display: 'none',
            [theme.media.md_]: {
                display: 'grid',
            }
        }
    },
    stage: {
        display: 'flex'
    },
    g2CSE: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        alignItems: 'flex-start',
    },
    series: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
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
        textAlign: 'center',
        color: '#A2B2C1',
        '&._score': {
            paddingBottom: 0.5,
            color: theme.colors.primaryDark.string()
        }
    },
    total: {
        justifyContent: 'flex-end',
        '&$td': {
            alignItems: 'flex-start',
            fontSize: 1,
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