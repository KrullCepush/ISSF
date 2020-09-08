import {createUseStyles} from 'react-jss';

const offset = 1

export default createUseStyles(theme => ({
    wrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: [0, -offset],
        [theme.media.sm_]: {
            '&': {
                justifyContent: 'space-between',
            }
        }
    },
    sponsor: {
        padding: offset,
        display: 'flex',
        alignItems: 'center',
    },
    sponsorImage: {
        height: 4.875,
    }
}));