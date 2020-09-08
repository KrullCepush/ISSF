import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    wrapper: {
        // marginTop: 5.5,
        display: 'flex',
        flexDirection: 'column',
        width: '90%'
    },
    pageTitle: {
        fontFamily: 'ISSFFontBlack',
        fontSize: 1.9,
        marginBottom: 1,
    },
    text: {
        fontSize: 1,
        '& p': {
            marginBottom: 2
        },
        '& :last-child': {
            marginBottom: 3
        }
    },
    content: {
        marginBottom: 3
    },
    row: {
        display: 'grid',
        gridTemplateColumns: '1fr 300px 1fr ',
        gridGap: 1,
        alignItems: 'center',
        borderBottom: '1px solid',
        // margin: [1.2, 0],
        padding: [1.2, 0],
        [theme.media._sm]: {
            gridTemplateColumns: 'auto ',
        }
    },
    title: {

    },
    blockWithPhoto: {
        display: 'flex',
        alignItems: 'center'
    },
    name: {

    },
    address: {
        fontSize: 0.9,
    },
    pdf: {
        textAlign: 'center'
    },
    imageWrapper: {
        width: 3,
        height: 3,
        borderRadius: '50%',
        marginRight: 0.7,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        [theme.media.md_]: {
            width: 5.7,
            height: 5.7,
        },
        alignItems: 'center'
    },
    image: {
        position: 'absolute',
        width: '100%'
    },
    fileIcon: {
        width: 3.4,
        height: 3.4,
        marginRight: 0.6,
    },
    disabledLink: {
        opacity: 0.3,
        pointerEvents: 'none',
    },
    navigationContainer: {
        maxWidth: '100%',
        flexGrow: 1,
        paddingBottom: 1.5,
        overflow: 'auto',
        marginBottom: 1.9,
    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 1,
    },
    navItem: {
        display: 'flex',
    },
    navItemLink: {
        ...theme.typo.title,
        position: 'relative',
        textDecoration: 'none',
        color: theme.colors.grayLight.string(),
        fontSize: 1.25,
        // lineHeight: '3.5',
        whiteSpace: 'nowrap',
        ['&.active']: {
            color: theme.colors.black.string(),
        },
        ['&.active:after']: {
            display: 'block',
            content: '""',
            left: 0,
            marginTop: 1,
            height: '6px',
            width: '100%',
            backgroundColor: 'black',
        },
        ['&.disabled']: {
            pointerEvents: 'none',
            // color: theme.colors.grayLighter.string(),
        },
    },
    committeeWrapper: {
        marginBottom: 1.5,
    },
    committeeTitle: {
        fontSize: 1.9,
        marginBottom: 0.5,
        color: theme.colors.primary.string(),
        textDecoration: 'underline',
    },
    committeeDescription: {
        fontSize: 1.1,
        marginBottom: 0.5,
    },
    link: {
        marginBottom: 1.5,
    },
    subTitle: {
        fontFamily: 'ISSFFont',
        fontSize: 1.9,
        marginBottom: 1.5,
    },
    publications: {
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'auto auto auto auto',
        marginTop: 1,
        [theme.media._sm]: {
            gridTemplateColumns: 'auto auto',
        }
    },
    publication: {
        display: 'flex',
    }
}))