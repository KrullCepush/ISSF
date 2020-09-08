import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    tabs: {
        ...theme.typo.title,
        fontSize: 2,
        marginTop: 1,
        marginBottom: 2,
    },
    tab: {
        marginRight: 1,
        color: theme.colors.primaryDark.alpha(0.6).string(),
        display: 'inline-block',
        ['&.active']: {
            color: theme.colors.primaryDark.string(),
            ['&:after']: {
                display: 'block',
                content: '""',
                height: 0.25,
                background: theme.colors.primaryDark.string()
            }
        }
    },
    mapBox: {
        display: 'flex',
        justifyContent: 'center',
        cursor: 'default'
    },
    filer: {
        display: 'flex',
        borderBottom: '1px solid #B3B3B3'
    },
    filterGroup: {
        marginLeft: 3,
        ['&:first-child']: {
            marginLeft: 0
        }
    },
    alphabet: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
    },
    filterButton: {
        ...theme.typo.title,
        textTransform: 'uppercase',
        color: theme.colors.primary.string(),
        verticalAlign: 'middle',
        lineHeight: 3,
    },
    filterButtonActive: {
        fontSize: 1.25,
        color: theme.colors.primaryDark.string(),
    },
    filterButtonDisabled: {
        fontSize: 1,
        color: theme.colors.primaryDark.alpha(0.4).string(),
        pointerEvents: 'none'
    },
    federations: {
        margin: -1,
        marginTop: 1,
        display: 'flex',
        flexWrap: 'wrap'
    },
    federationsTitle: {
        ...theme.typo.title,
        marginTop: 3,
        marginBottom: 2,
        fontSize: 2,
        textTransform: 'capitalize'
    },


    wrap: {
        '&:hover': {
            '& g': {
                fillOpacity: 0.5,
                '&:hover': {
                    fillOpacity: '1',
                }
            }
        },
    }
}))