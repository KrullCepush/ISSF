import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    tools: {
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr 1fr',
        gridGap: 1.5,
        [theme.media._md]: {
            gridTemplateColumns: '1fr',
        },
    },
    toolsItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative'
    },
}))