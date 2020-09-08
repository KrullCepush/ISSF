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
        gridTemplateColumns: '1fr 5rem',

        [theme.media.md_]: {
            gridTemplateColumns: '5rem 1fr 3rem 4rem 4rem 4rem'
        },
        [theme.media.lg_]: {
            gridTemplateColumns: '7rem 1fr 5rem 8rem 5rem 5rem',
        },
        '$head &': {
            display: 'none',
            [theme.media.md_]: {
                display: 'grid',
            }
        }

    },
    position: {
        // justifyContent: 'flex-end',
    },
    positions: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        color: '#485562'
    },
    series: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    seriesItem: {
        flex: 1,
        textAlign: 'center'
    },
    subtotal: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'right',
    },
    total: {
        justifyContent: 'flex-end',
        '&$td': {
            alignItems: 'center',
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