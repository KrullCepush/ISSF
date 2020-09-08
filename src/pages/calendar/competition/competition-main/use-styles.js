import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        flex: 1,
        display: 'grid',
        gridAutoColumns: 'auto',
        
        [theme.media.lg_]: {
            ['&._has_video']: {
                gridTemplateColumns: '1fr 1fr'
            }
        }
    },
    infoBlocks:{
        flex: 1,
        paddingBottom: 10,
        display: 'grid',
        gridTemplateAreas: `
            "contacts"
            "entry"
            "info"
        `,
        gridAutoColumns: '1fr',
        gridGap: 2,
        [theme.media.sm_]: {
            gridTemplateAreas: `
                "contacts contacts"
                "entry info"
            `,
        },
        [theme.media.lg_]: {
            gridTemplateAreas: `
                "contacts contacts entry info"
            `,
            ['._has_video > &']: {
                gridTemplateAreas: `
                    "contacts contacts"
                    "entry info"
                `,
            }
        }
    },
    contacts: {
        display: 'grid',
        gridGap: 2,
        [theme.media.md_]: {
            gridTemplateColumns: '1fr 1fr',
        }
    },
    column: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridGap: 2
    }
}))