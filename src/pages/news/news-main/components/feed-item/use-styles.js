import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        position: 'relative',
        display: 'flex',
        backgroundColor: theme.colors.grayLighterer.string(),
        borderRadius: '5px',
        flexDirection: 'column',
        overflow: 'hidden',
        textDecoration: 'none',
        color: theme.colors.primaryDark.string(),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    link: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 10
    },
    imageContainer: {
        width: '100%',
        height: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        maxWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        top: 0
    },
    description: {
        display: 'flex',
        flexGrow: 1,
        margin: [0.75, 1],
        flexDirection: 'column',
    },
    title: {
        flexGrow: 1,
    },
    published: {
        marginTop: 1,
        fontSize: 0.625, 
        color: theme.colors.gray.string()
    }
}))