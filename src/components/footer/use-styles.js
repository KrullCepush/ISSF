import {createUseStyles} from 'react-jss';

export default createUseStyles((theme) => ({
    footer: {
        width: '100%',
        textAlign: 'center',
        flexShrink: 0,
        color: theme.colors.blackLighter,
        position: 'fixed',
        bottom: 0,
        // zIndex: -1,
    },
    footerInner: {
        flex: 1,
        display: 'grid',
        height: theme.footer.height,
        gridGap: 3.8,
        gridTemplate: `
            "copy sitemap search apps social"
        `,
        gridTemplateColumns: '10rem auto 1fr auto auto'
    },
    item: {
        display: 'flex',
    },
    copy: {
        gridArea: 'copy',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    copyName: {
        fontSize: 0.875,
        marginLeft: 1,
        textAlign: 'left',
    },
    sitemap: {
        gridArea: 'sitemap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sitemapLink: {
        ...theme.typo.title,
        fontSize: 1,
        gridArea: 'sitemap',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        ['&:before']: {
            display: 'inline-block',
            content: '""',
            width: 1,
            height: 1.2,
            marginRight: 1,
            verticalAlign: 'bottom',
            background: {
                image: `url(${require('./sitemap.svg')})`,
                repeat: 'no-repeat',
                position: 'left center'
            }
        }
    },
    search: {
        gridArea: 'search',
        justifyContent: 'flex-start',
        alignItems: 'left',
    },
    searchInput: {
        height: 2,
        border: '1px solid #8A8A8A',
        boxSizing: 'border-box',
        boxShadow: 'inset 0px 3px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: 66,
        outline: 'none',
        flex: 1,
        padding: [0, 1, 0, 2.5],
        fontSize: 0.8,
        background: {
            image: `url(${require('./search.svg')})`,
            repeat: 'no-repeat',
            color: '#E4E4E4'
        }
    },
    apps: {
        gridArea: 'apps',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: [0, -0.5]
    },
    appsLink: {
        display: 'flex',
        margin: [0, 0.25]
    },
    social: {
        gridArea: 'social'
    },
    socialLink: {
        display: 'flex',
        margin: [0, 0.25]
    },
}));