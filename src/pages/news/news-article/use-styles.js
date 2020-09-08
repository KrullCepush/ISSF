import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    articlePage:{},
    btnBottom: {
        margin: "8px 0 24px 0"
    },
    tagBottom: {
        borderTop: '1px solid gray',
        width: '100%',
    },
    listTagBottom: {
        margin: '16px 0 0 0'
    },
    itemTagBottom: {
        fontSize: '14px',
        color: '#0E77B1',
        marginRight: '5px'
    },
    titleAdditionally: {
        color: '#2A3A43',
        fontSize: '30px',
        fontWeight: '900',
        margin: '70px 0 25px 0'
    },

    cards: {
        marginBottom: '50px',
    },
    card: {
        width: '280px',
        backgroundColor: '#EEEEEE',
        borderRadius: '5px',
    },
    imgCard: {
        width: '100%',
    },
    infoCard: {
        padding: '12px',
    },
    titleCard: {
        fontSize: '16px',
        fontWeight: 'bold',
    }
}))