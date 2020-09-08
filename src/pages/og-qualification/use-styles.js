import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    qualificationHead: {
        fontFamily: 'ISSFFont',
        fontSize: 1.875,
        fontWeight: 900,
        display: 'block',
        margin: {
            top: 0.6,
            bottom: 2.75
        }
    },
    ogDescriptionTitle: {
        marginBottom: 4
    },
    titleWrapHeader: {
        display: 'flex',
        marginBottom: 1.5625
    },
    titleHead: {
        fontFamily: 'ISSFFont',
        fontSize: 1.5625,
        fontWeight: 900,
    },
    titleHeadDecorationWrap: {
        flexGrow: 1,
        marginLeft: 0.75,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 0.8
    },
    titleHeadDecorationLow: {
        borderBottom: ['1px solid #737C82'],
        marginBottom: '3px'
    },
    titleHeadDecoration: {
        borderBottom: ['7px solid #737C82'],
    },
    titleMainWrap: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    titleDescWrap: {
        width: '47%'
    },
    titleDescHead: {
        fontFamily: 'ISSFFont',
        fontSize: 1.25,
        fontWeight: 900,
        marginBottom: 0.57
    },
    titleDescParagraph: {
        fontFamily: 'ISSFFONT',
        fontWeight: 500,
        fontSize: 1.25,
        marginBottom: 3,
        '&:last-child': {
            marginBottom: 0
        }
    },
    titleDataWrap: {
        width: '47%'
    },
    titleDataHead: {
        fontFamily: 'ISSFFont',
        fontWeight: 900,
        fontSize: 1.25,
        marginBottom: 0.57
    },
    titleDataLinkWrap: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: 2.25
    },
    titleDataLinkBefore: {
        display: 'flex',
        justifyContent: 'spase-around',
        ['&:before']: {
            content: '""',
            width: '38px',
            height: '38px',
            marginRight: 1,
            background: {
                image: `url(${require('./data.svg')})`,
                repeat: 'no-repeat',
            },
        }
    },
    titleDataLink: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 1.875,

    },
    titleDataLinkHead: {
        fontFamily: 'ISSFFONT',
        fontWeight: 500,
        fontSize: 1.25,
        color: '#0E77B1'
    },
    titleDataLinkSize: {
        fontFamily: 'ISSFFONT',
        fontWeight: 600,
        fontSize: 0.9,
        color: '#A2A2A2'
    },
    titleDataLinkWrapSecond: {
        display: 'flex',
        flexDirection: 'column',
        '& $titleDataLink': {
            marginBottom: 0.6,
        }
    },
    ogSwitcher: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 4,
        color: "#A3A8AB",
        cursor: 'pointer'
    },
    ogSwitcherActive: {
        color: '#2A3A43',
        paddingBottom: 2,
        borderBottom: '6px solid #2A3A43'
    },
    linkDescWrap: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'ISSFFont',
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    linkHeader: {
        fontSize: 1.25,
        marginBottom: 0.5
    },
    linkDesc: {
        fontSize: 1.625,
    },
    qualificatioWrapperStructure: {
        minHeight: '700px',
        [theme.media.md_]:  {
            ['& th']: {
                position: 'sticky',
                top: 0,
                zIndex: 99,
                backgroundColor: theme.colors.white.string(),
            },
            ['& > div']: {
                overflowX: 'unset'
            },
        }
    }
}))
