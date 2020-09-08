import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    wrap: {
        display: 'grid',
        fontSize: 1,
        gridTemplateColumns: '1fr 1fr',
        gridGap: 2,
        [theme.media._md]: {
            gridTemplateColumns: '1fr'
        }
    },
    element: {
        paddingBottom: 5
    },
    header: {
        fontSize: 2,
        fontWeight: '900',
        fontFamily: 'ISSFFontBlack',
        marginBottom: 2,
        [theme.media._sm]: {
            fontSize: 1.5,
            maxWidth: '310px'
        }
    },
    link: {
        display: 'block',
        marginBottom: 1,
    }

}))