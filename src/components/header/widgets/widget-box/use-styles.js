import {createUseStyles} from 'react-jss';

export default createUseStyles(theme => ({
    box: {
        padding: {
            top: 1,
            right: 0.75,
            left: 0.75
        },
        flexShrink: 0,
        flexGrow: 1
    },
    boxPrimary: {
        flexGrow: 1,
        flexShrink: 1,
        paddingRight: '30%',
        width: '100%',
        boxSizing: 'border-box',
        [theme.media.md_]: {
            paddingRight: 0.75
        }
    },
    title: {
        fontFamily: 'ISSFFontBlack',
        fontSize: 1.375,
        lineHeight: 2.5,
        color: theme.colors.white.string(),
        textTransform: 'uppercase',
        [theme.media.md_]: {
            marginBottom: 1,
            fontSize: 2.1875
        }
    },
    titlePrimry: {
        [theme.media.md_]: {
            fontSize: 2.5,
        }
    },
    body: {
        borderRadius: 0.3125,
        background: theme.colors.black.alpha(0.35).string(),
        padding: 1,
        backdropFilter: 'blur(15px)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        [theme.media.md_]: {
            padding: [1, 1.5]
        }
    },
    bodyPrimary: {
        borderRadius: 0,
        background: 'none',
        padding: 0,
        boxShadow: 'none',
        backdropFilter: 'none'
    }
}));