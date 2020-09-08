import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {

        display: 'grid',
        gridTemplateAreas: `
            "avatar rank     rank"
            "avatar name     country"
            "avatar personal personal"
        `,
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: 'auto auto auto',
        gridGap: 1,
        [theme.media.md_]: {
            padding: [2, 0]
        }
    },
    avatar: {
        gridArea: 'avatar',
        [theme.media.md_]: {
            margin: [-2, 0]
        }
    },
    avatarImage: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: '#ccc',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.media.md_]: {
            width: 15,
            height: 15,
        }
    },
    country: {
        [theme.media._md]: {
            display: 'none'
        },
    },
    personal: {
        gridArea: 'personal',
        display: 'flex',
        gridColumn: '1 / span 3',
        flexWrap: 'wrap',
        margin: -0.6,
        [theme.media.md_]: {
            gridColumn: 'auto',
        }
    },
    personalInformation: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        margin: {
            left: 1,
            bottom: 1
        }
    },
    containerInfo: {
        width: "100%",
        margin: [2, 'auto'],
    },
    propertyInfo: {
        marginRight: 5,
        color: 'red'
    }

}))

export const useRankStyles = createUseStyles(theme => ({
    rank: {
        gridArea: 'rank',
        // background: '#ccc',
    },
    label: {
        ...theme.typo.title,
        color: '#676767',
        fontSize: 0.625
    },
    value: {
        ...theme.typo.title,
        fontSize: 2.8,
        lineHeight: '2.8rem',
        display: 'flex',
        '&._up:after, &._down:after': {
            display: 'inline-block',
            width: 1,
            content: '""',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            margin: '0.4rem 0',
        },
        '&._up:after': {
            backgroundImage: `url(${require('./up.svg')})`,
            backgroundPosition: 'top'
        },
        '&._down:after': {
            backgroundImage: `url(${require('./down.svg')})`,
            backgroundPosition: 'bottom'
        }
    },
}));


export const useNameStyles = createUseStyles(theme => ({
    name: {
        gridArea: 'name',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    wrap: {
        marginRight: 2
    },
    last_name: {
        ...theme.typo.title,
        fontSize: 1.875
    },
    first_name: {
        fontSize: 1.25
    }
}))

export const usePropertyStyles = createUseStyles(theme => ({
    block: {
        // marginRight: 1.5,
        padding: 0.6,
        '&:last-child': {
            margin: 0
        }
    },
    blockBio: {
        marginBottom: 1
    },
    title: {
        ...theme.typo.title,
        fontSize: 0.625,
        color: '#676767'
    },
    value: {
        ...theme.typo.title,
        fontSize: 1.5625,
        color: '#2A3A43'
    },
}))