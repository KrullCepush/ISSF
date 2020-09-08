import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    row: {
        display: 'grid',
        gridGap: 0.5,
        // padding: [0.5, 0],
        [theme.media.lg_]: {
            gridTemplateColumns: 'minmax(25rem, 2fr) 5fr',
            borderBottom: '1px solid #ccc',
            '&:last-child': {
                border: 'none',
            },
        },
    },
    rowAthleteCotainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    head: {
        ...theme.typo.title,
        display: 'none',
        height: 2,
        fontSize: 0.625,
        gridGap: 0.5,
        color: '#676767',
        padding: [1, 0, 0.5, 0],
        [theme.media.lg_]: {
            borderBottom: '1px solid #ccc',
        },
        '$row:first-child &': {
            display: 'grid',
        },
        [theme.media._md]: {
            display: 'grid',
            '$rowAthleteCotainer &': {
                display: 'none',
            },
        },
    },
    athleteHead: {},
    resultHead: {},
}));
