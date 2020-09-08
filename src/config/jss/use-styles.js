import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    '@global': ({
        body: {
            backgroundColor: theme.colors.grayLight.string(),
        },
        a: {
            color: theme.colors.primary.string(),
            textDecoration: 'none',
        },
        'html, body, #root': {
            height: '100%',
            fontFamily: 'ISSFFont',
            fontSize: '14px',
            lineHeight: '1.2',
            color: theme.colors.primaryDark.string(),
            [theme.media.lg_]: {
                fontSize: '16px'
            }

        },
        'ul, h1, h2, h3, h4, h5, th, td': {
            margin: 0,
            padding: 0
        },
        'ul, ol': {
            listStyle: 'none'
        },
        'p': {
            textAlign: 'justify'
        },
        table: {
            borderSpacing: 0
        },
        '.xs': {
            display: 'none',
            [theme.media._sm]: {
                display: 'block'
            }
        },
        '.sm': {
            display: 'none',
            [theme.media.sm_md]: {
                display: 'block'
            }
        },
        '.md': {
            display: 'none',
            [theme.media.md_lg]: {
                display: 'block'
            }
        },
        '.lg': {
            display: 'none',
            [theme.media.lg_xl]: {
                display: 'block'
            }
        },
        '.xl': {
            display: 'none',
            [theme.media.xl_]: {
                display: 'block'
            }
        }

    }),
    page: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
    }
}))