import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    resultsHeader: {

    },
    back: {
        ...theme.typo.medium,
        textTransform: 'uppercase',
        fontSize: 0.75
    },
    info: {
        marginTop: 1,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gridTemplateAreas: `
            "name name"
            "datetime file"
        `,
        [theme.media.md_]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexDirection: 'row'
        }
    },
    name: {
        flexGrow: 3,
        display: 'flex',
        flexDirection: 'column',
        gridArea: 'name'
    },
    subtitle: {
        ...theme.typo.title,
        fontSize: 1.25
    },
    title: {
        ...theme.typo.title,
        fontSize: 2
    },
    datetime: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        fontSize: 1.25,
        gridArea: 'datetime'
    },
    date: {

    },
    time: {

    },
    fileLink: {
        height: '80%',
        gridArea: 'file'
    },
    fileIcon: {
        height: '100%',
    }
}))