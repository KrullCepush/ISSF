import { createUseStyles } from 'react-jss';

export const useRowStyles = createUseStyles(theme => ({
    row: {
        display: 'grid',
        gridTemplateAreas: `
            "rank    bib     avatar  name    nat     targets"
            "series  series  series  series  series  total"
            "remarks remarks remarks remarks remarks remarks"
        `,
        gridTemplateColumns: `3rem 3rem 3rem 1fr 4rem 4rem`,
        [theme.media.sm_]: {
            gridTemplateAreas: `
                "rank    bib    avatar name   nat   targets"
                "series  series series series total remarks"
            `,
            gridTemplateColumns: `3rem 3rem 3rem 1fr 4rem 10rem`,
        },
        [theme.media.lg_]: {
            gridTemplateAreas: `"rank bib avatar name nat series total remarks targets"`,
            gridTemplateColumns: `3rem 3rem 3rem 1fr 4rem 20rem 1fr 1fr 4rem`
        }
    },
    grayColumnsBody: {
        background: '#F0F0F0',
        [theme.media.lg_]: {
            background: 'transparent',
        }
    },
    avatar: {
        width: 2,
        height: 2,
        backgroundSize: 'cover',
        borderRadius: '50%',
    }
}))

export const useStylesSeries = createUseStyles(theme => ({
    col: {
        maxWidth: 20
    },
    wrap: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    item: {
        flex: 1,
        textAlign: 'center',
        opacity: 0.8,
        cursor: 'default',
        '&:first-child': {
            textAlign: 'left'
        },
        '&:last-child': {
            textAlign: 'right'
        },
        '&:hover': {
            opacity: 1
        }
    },
}))

export const useRemarksColStyles = createUseStyles(theme => ({
    col: {
        alignItems: 'flex-start',
        '&._empty': {
            display: 'none'
        },
        [theme.media.sm_]: {
            alignItems: 'flex-end',
            '&._empty': {
                display: 'flex'
            },
        }
    }
}))

export const useTotalColStyles = createUseStyles(theme => ({
    col: {
        alignItems: 'flex-end',
        [theme.media.sm_]: {
            alignItems: 'flex-end'
        },
        [theme.media.lg_]: {
            alignItems: 'flex-end'
        }
    }
}))

export const useTargetsColStyles = createUseStyles(theme => ({
    col: {
        alignItems: 'flex-end'
    }
}))