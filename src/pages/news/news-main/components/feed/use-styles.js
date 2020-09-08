import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    feed: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '1rem',
        [theme.media.sm_]: {
            gridTemplateColumns: '1fr 1fr',
        },
        [theme.media.md_]: {
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        }  
    }
}))