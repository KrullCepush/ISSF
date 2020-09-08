import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        width: '100%',
        maxWidth: 40,
        // marginLeft: 'auto',
        // marginRight: 'auto',
    },
    title: {
        ...theme.typo.title,
        fontSize: 2
    },

    row: {
        ...theme.typo.iatalic,
        display: 'grid',
        gridTemplateColumns: '3rem 3rem 1fr 1fr 1fr 4rem',
        fontWeight: 'bold'
    },
    col: {
        marginBottom: 0.5,
        padding: [0.5, 0],
        borderBottom: '1px solid #A1A1A1',
        alignItems: 'center',
        display: 'flex',
        fontSize: 2.5,
        lineHeight: '1',
        justifyContent: 'flex-end',
    },
    place: {
        fontSize: 2.8,
        justifyContent: 'flex-start',
    },
    country: {
        justifyContent: 'flex-start',
    },
    medals: {

    },
    medalsTotal: {
        fontSize: 3.75,
        padding: 0,
        border: 'none',
        marginLeft: 5
    },
    count: {
        '&[data-count="0"]': {
            opacity: 0.3
        }
    },
    total: {
        fontSize: 3.75,
        padding: 0,
        border: 'none'
    }
}))