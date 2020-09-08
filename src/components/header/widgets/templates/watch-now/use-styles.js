import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => {

    const white = theme.colors.white;

    return ({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100px'
        },
        date: {
            color: white.string(),
            lineHeight: '1.2',
            font: {
                weight: 500,
            },
            margin: {
                bottom: 0.5
            },
        },
        title: {
            color: white.string(),
            lineHeight: '1.2',
            font: {
                family: 'ISSFFontBlack',
                weight: 900,
                size: 1.285
            },
            margin: {
                bottom: 1
            },
            flex: {
                grow: 1
            }
        },
        place: {
            color: white.string(),
            fontWeight: 500,
            lineHeight: '1.2',
            textTransform: 'capitalize'
        },
        [theme.media.md_]: {
            date: {
                fontSize: 1.0625,
            },
            wrapper: {
                maxWidth: 16.625,
                minHeight: 8.25,
            },
            title: {
                fontSize: 1.625
            }
        }
    })
});