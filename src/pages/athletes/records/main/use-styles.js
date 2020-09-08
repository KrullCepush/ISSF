import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        overflowX: 'auto',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    table: {
        width: '100%',
        minWidth: '600px'
    },
    thead: {},
    tbody: {},
    th: {
        textAlign: 'left',
        height: 2.5,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'middle',
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
        fontSize: 1.125,
        fontWeight: '500',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        }
    },
    championship: {
        width: '5%'
    },
    junior: {
        width: '5%'
    },
    team: {
        width: '5%'
    },
    result: {
        width: '15%'
    },
    titles: {
        width: '50%',
    },
    nameInner: {
        display: 'flex',
        alignItems: 'center'
    },
    nation: {
        width: '10%',
    },
    city: {
        width: '10%',
    },
}))