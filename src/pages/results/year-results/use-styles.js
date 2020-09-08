import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        margin: [1, 0]
    },
    title: {
        ...theme.typo.title,
        marginBottom: 1
    },
    item: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gridGap: 1,
        padding: [0.5, 0],
        borderBottom: '1px solid #ccc',
        '&:last-child': {
            borderBottom: 'none'
        }
    },
    itemDates: {

    },
    itemMain: {

    },
    itemTitle: {
        fontSize: 1.25
    },
    itemGeo: {
        textTransform: 'capitalize'
    },
    itemImageContainer: {
        display: 'flex',
        // alignItems: 'center'
    }
}))