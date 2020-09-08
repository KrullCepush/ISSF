import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        display: 'grid',
        gridGap: 1,
        flex: 1,
        marginTop: 2,
        gridTemplateAreas: `
            "info"
            "bio"
            "media"
            "achievments"
        `,
        [theme.media.md_]: {
            gridTemplateAreas: `
                "info media"
                "bio bio"
                "achievments achievments"
            `,
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto 1fr',
        },
        [theme.media._md]: {
            gridTemplateAreas: `
                "info info"
                "media media"
                "bio bio"
                "achievments achievments"
            `,
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto 1fr',
        }
    },
    info: {
        gridArea: 'info',
    },
    bio: {
        gridArea: 'bio',
    },
    media: {
        gridArea: 'media',
        width: '100%',
        margin: [0, 'auto']
    },
    achievmentsTitle: {
        ...theme.typo.title,
        fontSize: 1.725,
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        '&:before': {
            width: 3,
            height: 3,
            display: 'inline-block',
            content: '""',
            backgroundImage: `url(${require('./achievments.svg')})`,
            backgroundSize: 'cover',
            marginRight: 1
        },
        [theme.media.md_]: {
            marginLeft: 15.625,
            '&:after': {
                display: 'block',
                content: '""',
                marginLeft: 1,
                height: 1,
                borderBottom: `1px solid ${theme.colors.primaryDark.string()}`,
                flex: 1
            }
        },
        [theme.media._sm]: {
            marginBottom: 1,
        }
    },
    achievments: {
        gridArea: 'achievments',
        minHeight: '100px',
        width: '100%'
    },
    medalsWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.media._sm]: {
            display: 'block'
        }
    },
    medalStanding: {
        alignSelf: 'center',
        margin: [0, 'auto'],
        display: 'flex',
        justifyContent: 'space-around',
    },
    medal: {
        fontSize: 1.725,
        color: '#2A3A43',
        fontFamily: 'ISSFFontBlack'
    },
    medalStandingWrap: {
        marginRight: '10px',
        display: 'flex',
        justifyContent: 'flex-start'
    },
}))