import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    event: {
        marginTop: 1.5,
        display: 'flex',
        flexDirection: 'column',
        [theme.media.sm_]: {
            flexDirection: 'row',
        },
    },
    title: {
        ...theme.typo.title,
        fontSize: 1.25,
        textAlign: 'center',
        marginBottom: 1,
        [theme.media.sm_]: {
            width: 15,
            fontSize: 1.5,
            textAlign: 'right',
        },
    },
    bracket: {
        [theme.media.sm_]: {
            width: 0.5,
            borderWidth: '3px 0 3px 3px',
            borderStyle: 'solid',
            borderRadius: '5px 0 0 5px',
            margin: [0, 2],
            ['&:after']: {
                width: 0.3,
                height: 0.3,
                content: '""',
                display: 'block',
                transform: 'translate(-0.4rem, 1.2rem) rotateZ(45deg)',
                background: 'rgb(255, 255, 255)',
                borderStyle: 'solid',
                borderWidth: '0 0 3px 3px',
                background: theme.colors.white.string(),
            },
        },
    },
    content: {
        flexGrow: 1,
    },
}));

export const useTableStyles = createUseStyles(theme => ({
    // Table
    table: {
        fontSize: 1.25,
    },
    tbody: {},
    tr: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 1,
        borderBottom: '1px solid #DEDEDE',
        [theme.media.md_]: {
            gridTemplateColumns: '3fr 2fr 1fr',
        },
    },
    td: {
        height: 3.625,
        display: 'flex',
        alignItems: 'center',
        padding: [0.5, 0],
        // [theme.media.md_]: {
        //     padding: 0
        // }
    },
    // Columns
    name: {
        display: 'flex',
        flexDirection: 'column',
        // width: '90%',
        [theme.media.md_]: {
            // width: '40%',
            flexDirection: 'row',
        },
    },
    date: {
        // width: '25%',
        display: 'none',
        [theme.media.md_]: {
            display: 'flex',
        },
    },
    time: {
        // width: '20%',
        display: 'none',
        [theme.media.md_]: {
            display: 'flex',
        },
    },
    link: {
        // width: '15%',
        // display: 'none',
        // [theme.media.lg_]: {
        //     display: 'table-cell'
        // }
    },
    file: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    nameLink: {
        ...theme.typo.black,
        textDecoration: 'none',
        textTransform: 'uppercase',
    },
    seeResults: {
        '&._disabled': {
            visibility: 'hidden',
        },
    },
    fileLink: {
        display: 'flex',
        '&._disabled': {
            visibility: 'hidden',
        },
    },
    rowHelper: {
        // fontSize: 0.75,
        [theme.media.md_]: {
            display: 'none',
        },
    },
}));
