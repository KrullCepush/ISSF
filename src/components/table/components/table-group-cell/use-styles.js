import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    tableGroupCell: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    title: {
        textAlign: 'center',
        display: 'flex',
        width: '85%',
        alignSelf: 'center',
        // [theme.media.lg_]: {
            '&:before, &:after': {
                flexGrow: 1,
                display: 'block',
                content: '""',
                marginTop: '0.6em'
            },
            '&:before': {
                borderRadius: ['3px', 0, 0, 0],
                marginLeft: 0.4,
                marginRight: 0.3,
                borderWidth: '1px 0 0 1px',
                borderStyle: 'solid',
            },
            '&:after': {
                borderRadius: [0, '3px', 0, 0],
                marginRight: 0.4,
                marginLeft: 0.3,
                borderWidth: '1px 1px 0 0',
                borderStyle: 'solid',
            }
        // }
        
    },
    group: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    value: {
        padding: 0.25,
        textAlign: 'center',
        flex: 1,
    },
}))