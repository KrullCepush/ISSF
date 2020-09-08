import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        display: 'flex',
        marginBottom: 2,
        flexDirection: 'column',
        '&:last-child': {
            margin: 0
        },
        [theme.media.md_]: {
            flexDirection: 'row',
        }
    },
    title: {
        ...theme.typo.title,
        fontSize: 1.25,
        color: '#484B4E',
        textAlign: 'center',
        marginBottom: 2,
        [theme.media.md_]: {
            flexBasis: '12rem',
            marginRight: 2,
            textAlign: 'right',
        }
    },
    body: {
        flexGrow: 1,
        overflow: 'auto'
    }
}));


export const useTableStyles = createUseStyles(theme => ({
    table: {
        width: '100%'
    },
    thead: {},
    tbody: {},
    th: {
        textAlign: 'left',
        height: 1.5,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'baseline',
        fontFamily: 'ISSFFontBlack',
        fontWeight: 900,
        fontSize: 0.625,
        textTransform: 'uppercase',

        color: '#676767',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        }
    },
    tr: {},
    td: {
        color: '#1F2E3D',
        height: 3.625,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'middle',
        fontSize: 1.25,
        fontWeight: '500',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        }
    },
    rank: {
        width: 6,
        width: '10%'
    },
    location: {
        '&$td': {
            textTransform: 'capitalize'
        }
    },
    score: {
        textAlign: 'right',
        width: '10%',
        '&$td': {
            fontSize: 1.875,
        }
    },
    semi: {
        textAlign: 'center',
        '&$td': {
            fontSize: 1.875,
        }
    },
    final: {
        textAlign: 'right',
        width: '10%',
        '&$td': {
            fontSize: 1.875,
        }
    },
    year: {
        textAlign: 'right',
        width: '10%'
    },
}))