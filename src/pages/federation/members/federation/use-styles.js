import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        padding: 1,
        width: '100%',
        boxSizing: 'border-box',
        minHeight: '300px',
        [theme.media.md_]: {
            width: '50%',
        }
    },
    card: {
        background: '#F5F5F5',
        border: '1px solid #C7C7C7',
        borderRadius: 0.25,
        padding: [1, 1.5],
        display: 'flex',
        minHeight: '100%',
        boxSizing: 'border-box',
        flexDirection: 'column',
        [theme.media.md_]: {
            flexDirection: 'row'
        }
    },
    country: {
        display: 'flex',
        fontFamily: 'Arial Narrow',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.colors.primaryDark.string()
    },
    left: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        marginTop: 1,
        justifyContent: 'space-between',
        [theme.media.md_]: {
            width: 13,
            marginLeft: 1,
            marginTop: 0,
        }
    },
    countryName: {
        lineHeight: 1.5,
        marginLeft: 0.5,
    },
    countryNameDesc: {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    title: {
        ...theme.typo.title,
        fontSize: 1.25,
        marginTop: 0.5
    },
    subtitle: {
        ...theme.typo.medium,
        marginTop: 0.75,
        fontSize: 1.125
    },
    membersWrap: {
        marginTop: 1,
        flexGrow: 1,
        display: 'flex',
        alignItems: 'flex-end',
    },
    members: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: 1,
    },
    member: {
        display: 'flex',
        flexDirection: 'column',
        ...theme.typo.medium,
        opacity: 0.6,

    },
    president: {
        opacity: 1
    },
    address: {
        marginBottom: 1,
        textAlign: 'left'
    },
    contacts: {
        [theme.media.md_]: {
            fontSize: 0.625
        }
    },
    desc: {
        textAlign: 'left'
    }
}))