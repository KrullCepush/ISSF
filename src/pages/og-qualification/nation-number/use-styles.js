import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    TableContainer: {
        minHeight: '1000px'
    },
    desc: {
        fontSize: 1.25,
        fontFamily: 'ISSFFONT',
        fontWeight: 500,
        marginBottom: 2
    },
    container: {
    },
    table: {
        width: '100%',
        minWidth: '600px',
        margin: {
            bottom: 6.875
        }
    },
    thead: {},
    tbody: {},
    th: {
        textAlign: 'right',
        height: 2.5,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'middle',
        fontFamily: 'ISSFFont',
        fontWeight: 900,
        fontSize: 0.625,
        textTransform: 'uppercase',
        color: '#676767',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        }
    },
    tr: {
        border: 0,
    },
    td: {
        textAlign: 'right',
        fontFamily: 'ISSFFont',
        color: '#1F2E3D',
        height: 3.625,
        borderBottom: '1px solid #DEDEDE',
        verticalAlign: 'middle',
        fontSize: 1,
        fontWeight: '500',
        paddingRight: 2,
        ['&:last-child']: {
            padding: 0
        }
    },
    tot: {
        fontWeight: 900,
        fontSize: 0.625,
        color: '#676767',
        ['&$td']: {
            fontSize: 1.875,
            color: '#000'
        }
    },
    nation: {
        textAlign: 'left',
        fontWeight: 900,
        fontSize: 0.625,
        color: '#676767',
        ['&$td']: {
            fontSize: 0.9,
            color: '#000'
        },
    }
}))