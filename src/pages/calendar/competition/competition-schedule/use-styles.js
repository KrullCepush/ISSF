import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        display: 'grid',
        gridGap: 1,
    },
    row: {
        display: 'grid',
        // gridTemplateColumns: '2fr 1fr 2fr 10fr',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: `
            "weekday date"
            "time title"
        `,
        gridGap: 1,
        [theme.media.md_]: {
            gridTemplateColumns: '2fr 1fr 2fr 8fr',
            gridTemplateAreas: `
                "weekday date time title"
            `,
        },
    },
    first: {},
    last: {
        marginBottom: 2,
    },
    weekday: {
        gridArea: 'weekday',
        fontFamily: 'ISSFFontBlack',
        fontWeight: 900,
        textTransform: 'uppercase',
        color: theme.colors.primaryDark.string(),
    },
    date: {
        gridArea: 'date',
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: 1.1,
    },
    time: {
        gridArea: 'time',
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: 1.1,
    },
    title: {
        gridArea: 'title',
        fontWeight: 500,
        fontSize: 1.1,
        [theme.media.md_]: {
            fontSize: 1.25,
            lineHeight: 1.5,
        },
    },
}));
