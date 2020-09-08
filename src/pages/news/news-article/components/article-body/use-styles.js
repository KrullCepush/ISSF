import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container:{
        ['& p']: {
            margin: [1, 0]
        },
        ['& table']: {
            width: "100%",
            textAlign: 'left',
            borderCollapse: 'collapse'
        },
        ['& table thead tr']: {
            fontFamily: "ISSFFontBlack",
            fontSize: 0.625,
            textTransform: 'Uppercase',
            color: '#676767',
            
            borderBottom: '1px solid #BBBBBB'
        },
        ['& table th']: {
            padding: '0.5rem 0.5rem 1rem 0.5rem',
        },
        ['& table tr']: {
            fontFamily: "ISSFFont",
            fontSize: 1,
            textTransform: 'Capitalize',
            color: '#1F2E3D',
            borderBottom: '1px solid #DEDEDE'
        },
        ['& table td']: {
            padding: '1rem 0.5rem 1rem 0.5rem',
        }

    },
    title: {
        fontSize: 2,
        marginBottom: 3.5
    },
    subtitle: {
        fontSize: 1.25
    },
    image: {
        width: '100%',
        marginBottom: 1,
        borderRadius: 0.5,
        [theme.media.md_]: {
            width: '30%',
            float: 'right',
            marginLeft: 1
        }
    },

}))