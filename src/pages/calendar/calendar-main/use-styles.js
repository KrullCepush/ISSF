import { createUseStyles } from 'react-jss';

const competitionItemWidth = 6;

export default createUseStyles(theme => ({
    wrapper: {
        flex: 1,
        [theme.media.md_]: {
            display: 'grid',
            gridTemplateColumns: '70% 1fr',
            gridGap: 2,
        },
    },
    tools: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
        padding: [1, 0],
        textTransform: 'uppercase',
    },
    calendar: {
        position: 'relative',
    },
    sidebar: {
        // display: 'none',
        [theme.media.md_]: {
            display: 'block',
            padding: [1, 0],
        },
    },
    select: {
        fontFamily: 'ISSFFontBlack',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 1.4,
        lineHeight: '120%',
        textTransform: 'uppercase',
        color: theme.colors.primary.string(),
    },
    toolsDate: {
        display: 'grid',
        gridGap: 1,
        gridTemplateColumns: 'auto auto',
    },
    toolsYearly: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    toolsViewMobile: {
        display: 'grid',
        gridGap: 0.5,
        gridTemplateColumns: '1fr',
        [theme.media.md_]: {
            display: 'none',
        },
    },
    toolsView: {
        display: 'none',
        [theme.media.md_]: {
            display: 'grid',
            gridGap: 1,
            gridTemplateColumns: 'auto auto',
            alignItems: 'center',
            textTransform: 'uppercase',
        },
    },
    toolsButton: {
        cursor: 'pointer',
        background: 'none',
        padding: 0,
        border: 'none',
        outline: 'none',
        fontFamily: 'ISSFFontBlack',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 1,
        lineHeight: '120%',
        textTransform: 'uppercase',
        color: theme.colors.primary.string(),
        ['&._active']: {
            pointerEvents: 'none',
            fontSize: 1.25,
            color: theme.colors.primaryDark.string(),
        },
    },
}));
