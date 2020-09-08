import { createUseStyles } from 'react-jss';

export const useViewStyles = createUseStyles(theme => ({

}));

export const useMonthStyles = createUseStyles(theme => ({
    month: {
        margin: [2, 0],
        [theme.media.md_]: {
            display: 'flex',
        }
    },
    monthName: {
        display: 'none',
        width: 5,
        marginRight: 3,
        marginBottom: 1,
        fontFamily: 'ISSFFontBlack',
        fontWeight: 900,
        textTransform: 'uppercase',
        color: theme.colors.primaryDark.string(),
        ['._year &']: {
            display: 'block'
        }
    },
    competitions: {
        flex: 1
    },
}));

export const useCompetitionStyles = createUseStyles(theme => ({
    competition: {
        display: 'flex',
        marginBottom: 1,
        textDecoration: 'none',
    },
    dates: {
        width: 7.5,
        flexShrink: 0,
        marginRight: 1.5,
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: 1.1,
        letterSpacing: '-0.02em',
        [theme.media.md_]: {
            fontSize: 1.25,
            lineHeight: 1.5,
        }
    },
    main: {

    },
    title: {
        fontWeight: 500,
        fontSize: 1.1,
        [theme.media.md_]: {
            fontSize: 1.25,
            lineHeight: 1.5,
        }
    },
    place: {
        opacity: 0.7,
        lineHeight: 1.125,
        marginTop: 0.25,
        textTransform: 'capitalize'
    }
}));