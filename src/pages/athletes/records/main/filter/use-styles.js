import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container:{},
    title: {
        ...theme.typo.title,
        fontSize: 2,
        margin: {
            top: 2,
            bottom: 1
        }
    },
    form: {
        display: 'grid',
        gridGap: 1,
        [theme.media.md_lg]: {
            gridTemplateColumns: '1fr 1fr'
        },
        [theme.media.lg_]: {
            gridAutoFlow: 'column'
        }
        // gridAutoFlow: 'column',
    }
}))