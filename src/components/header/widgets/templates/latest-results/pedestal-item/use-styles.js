import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => {
    return ({
        wrapper: {
            fontFamily: 'Arial Narrow',
            padding: [0, 0.5],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            [theme.media.md_]: {
                padding: [0, 1],
            }

        },
        head: {
            display: 'flex',
            flexGrow: 1,
        },
        position: {
            fontSize: 2.8125,
            fontStyle: 'italic',
            fontWeight: 'bold'
        },
        country: {
            margin: [0, 0.5]
        },
        countryName: {
            marginTop: 0.5,
            fontSize: 0.875,
            fontStyle: 'italic'
        },
        score: {
            font: {
                size: 1.375,
                style: 'italic',
                weight: 'bold'
            },
            background: {
                image: `url(${require('./score-bg.svg')})`,
                repeat: 'no-repeat',
                size: 'contain'
            },
            marginTop: 0.5,
            color: theme.colors.black.string(),
            width: 2.5,
            height: 2.125,
            boxSizing: 'border-box',
            padding: [0.25, 0.7, 0, 0],
            textAlign: 'center'
        },
        name: {
            fontSize: 0.875,
            fontStyle: 'italic'
        },
        flag: {
            display: 'flex',
            justifyContent: 'center',
            width: 2.25,
            height: 1.3125,
            transform: 'skew(-10deg) translateX(-3px)',
            overflow: 'hidden',
            borderRadius: '2px'
        },
        flagImg: { 
            width: 2.5, 
            height: 1.3125, 
            transform: 'skewX(10deg)', 
        }
    })
});