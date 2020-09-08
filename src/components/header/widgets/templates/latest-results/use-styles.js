import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => {

    const white = theme.colors.white;

    return ({
        wrapper: {
            color: white.string(),
            display: 'flex',
            flexDirection: 'column',
            minHeight: 8.25
        },
        head: {
            display: 'flex',
            font: {
                size: 0.875
            },
            lineHeight: '1.2'
        },
        date: {
            marginRight: 0.625
        },
        place: {
            marginRight: 0.625,
            flex: 1,
            color: white.alpha(0.6).string()
        },
        linkBox: {
            '& > a': {
                color: theme.colors.gold.string()
            }
        },
        title: {
            fontFamily: 'ISSFFontBlack',
            textTransform: 'uppercase',
            fontSize: 0.8125,
            marginTop: 0.625
        },
        discipline: {
            fontFamily: 'ISSFFontBlack',
            textTransform: 'uppercase',
            fontSize: 1.125
        },
        pedestal: {
            flexGrow: 1,
            margin: [0, -0.5],
            display: 'flex',
            justifyContent: 'space-between',
            [theme.media.md_]: {
                margin: [0, -1],
            }
        }
    })
});