import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    worldRankingTitle: {
        fontFamily: 'ISSFFontBlack',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 2,
        textTransform: 'uppercase',
        color: '#2A3A43',
        padding: [3, 0, 0, 0],

    },
    athlets: {
        margin: [2, 0],
        display: 'flex',
        // margin: [0, -1]
    },
    loadMoreContainer: {
        margin: [1, 0],
        textAlign: 'center',
    }
}))