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
        alignItems: 'center'
    },
    td: {
        display: 'flex',
        alignItems: 'center'
    },
    grid: {
        display: 'grid',
        gridGap: 0.5,
        gridTemplateColumns: '5rem 5rem 1fr 5rem 5rem 5rem',

        [theme.media.lg_]: {
            gridTemplateColumns: '5rem 5rem 1fr 5rem 5rem 5rem',
        },
        '$head &': {
            display: 'none',
            [theme.media.lg_]: {
                display: 'grid',
            }
        },
        '$row &': {
            [theme.media.lg_]: {
                display: 'none',
            }
        }

    },
    position: {
        alignItems: 'flex-start',
        '&.ST': {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
        }
    },
    positionColumn: {
        textAlign: 'center'
    },
    stageScore: {
        paddingBottom: 0.5
    },
    target: {
        color: '#A2B2C1'
    },
    total: {
        justifyContent: 'flex-end',
        '$bcol': {
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