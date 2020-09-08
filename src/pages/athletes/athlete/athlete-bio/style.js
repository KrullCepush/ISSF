import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    containerInfo: {
        width: "100%",
        margin: [2, 'auto'],
    },
    personalInformation: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        margin: {
            left: 1,
            bottom: 1
        },
        [theme.media._md]: {
            margin: {
                left: 0,
                bottom: 1
            },
        }
    },
    block: {
        marginRight: 1.5,
        '&:last-child': {
            margin: 0
        }
    },
    blockBio: {
        marginBottom: 1
    },
    title: {
        ...theme.typo.title,
        fontFamily: 'ISSFFontBlack',
        fontSize: 0.625,
        color: '#676767',
        marginBottom: 0.25,

    },
    value: {
        ...theme.typo.title,
        fontFamily: 'ISSFFont',
        fontSize: 1,
        color: '#1F2E3D',
        fontWeight: 900,
    },
}))