import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {},
    filter: {
        display: 'grid',
        gridGap: 1,
        margin: [1, 0],
        [theme.media.md_]: {
            gridAutoFlow: 'dense',
            gridTemplateColumns: '1fr auto auto 1fr auto'
        }
    },
    select: {
        '&._selected': {
            textTransform: 'capitalize',
            borderColor: theme.colors.primary.string(),
            '& label, & ._title': {
                color: theme.colors.primary.string()
            }
        },
        '& option': {
            textTransform:'capitalize'
        }
    },
    title: {
        ...theme.typo.title,
        margin: [2, 0, 0.5]
    },
    years: {
        display: 'grid',
        gridGap: 2,
        [theme.media.md_]: {
            gridAutoFlow: 'column',
        }
    },  
    th: {
        ...theme.typo.title,
        fontSize: 0.75,
        textAlign: 'left',
        height: 2,
        verticalAlign: 'middle'
    },

    tr: {

    },

    td: {
        textAlign: 'left',
        height: 3,
        verticalAlign: 'middle',
        borderTop: '1px solid #ccc'
    },

    rank: {
        width: '10%'
    },
    athlete_name: {
        width: '60%'
    },
    athlete_nation: {
        width: '10%'
    },
    qualification_score: {
        width: '10%'
    },
    final_score: {
        width: '10%',
        textAlign: 'right'
    },
}))