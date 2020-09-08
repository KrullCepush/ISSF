import {createUseStyles} from 'react-jss';

const fileLinkFormats = ('pdf xls docx pages zip url').split(' ');
const fileIcons = fileLinkFormats.reduce((result, ext) => ({
    ...result,
    [`&._${ext}:before`]: {
        backgroundImage: `url(${require(`assets/icons/${ext}-icon.svg`)})`,
    }
}), {})

export default createUseStyles(theme => ({
    breadcrumbs: {
        '._subheader &': {
            display: 'none'
        }
    },
    staticContent: {
        margin: [1, 0, 1],
        [theme.media.md_]: {
            width: '80%',
            
        },
        ['& h2']: {
            ...theme.typo.title,
            fontSize: 2,
            marginTop: 2,
            marginBottom: 0.5
        },
        ['& h3']: {
            ...theme.typo.title,
            fontSize: 1.5,
            marginTop: 1.5,
            marginBottom: 0.5, 
            color: theme.colors.primaryDark.alpha(0.8).string()
        },
        ['& h4, & h5, & h6']: {
            ...theme.typo.title,
        },
        ['& p']: {
            margin: [0.5, 0]
        },
        ['& img']: {
            maxWidth: '100%',
            [theme.media._sm]:  {
                width: '100%',
                maxWidth: '100%',
            }
        },
        ['& svg']: {
            maxWidth: '100%',
            [theme.media._sm]:  {
                width: '100%',
                maxWidth: '100%',
            }
        },
        ['& .LinksTable']: {
            display: 'grid',
            gridGap: 1,
            [theme.media.md_]: {
                gridTemplateColumns: '1fr 1fr 1fr'
            },
            [theme.media.lg_]: {
                gridTemplateColumns: '1fr 1fr 1fr 1fr'
            }
        },
        ['& .history-layout']: {
            [theme.media._sm]: {
                gridTemplateColumns: 'auto',
            },
            ['& .picruresColumn']: {
                [theme.media._sm]: {
                    paddingBottom: 4
                }
            },
            ['& .history-picture img']: {
                [theme.media._sm]: {
                   width: '100%',
                   maxWidth: '75%',
                   margin: '15px 0'
                },
            },
            ['& .dateItem']: {
                ['& h3']: {
                    [theme.media._sm]: {
                        fontSize: 2,
                    }
                },
                ['& .timeTitle, .timeLine']: {
                    display: 'none',
                },
                ['& .dateText']: {
                    paddingLeft: 0,
                }
            }
        },
        ['& .file-link']: {
            display: 'flex',
            alignItems: 'center',
            [fileLinkFormats.map(s => `&._${s}:before`).join(', ')]: {
                display: 'flex',
                content: '""',
                width: 3,
                height: 3,
                flexShrink: 0,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                marginRight: 0.5
            },
            ...fileIcons,
            ['&._url:before']: {
                ...fileIcons['&._url:before'],
                width: 1,
                backgroundSize: '3rem'
            }
        },
        '& ul': {
            listStyle: 'inherit',
            margin: [1, 0],
            paddingInlineStart: '40px'
        },
        '& ol': {
            listStyle: 'decimal',
            margin: [1, 0]
        },
        '& .two_columns': {
            margin: [0.5, 0],
            [theme.media.sm_]: {
                columnCount: 2,
                columnGap: '1rem'
            },
            '& > p:first-child': {
                marginTop: 0
            },
            '& > p:last-child': {
                marginBottom: 0
            }
        },
        '& .clear-left': {
            clear: 'left'
        },
        '& .picture_r': {
            width: '15%',
            float: 'right',
            marginLeft: 1,
            marginRight: 1,
            borderRadius: 0.4,
            overflow: 'hidden'
        },
        '& .picture_l': {
            float: 'left',
            marginLeft: 0,
            marginRight: 1
        },
        '& .img_place': {
            width: '100%',
		    borderRadius: 0.4
        },
        '& .img_text': {
            display: 'flex',
            paddingTop: 1,
            fontSize: 0.8,
            paddingBottom: 1,
            textAlign: 'center'
        },
        '& .ul-li': {
            listStyleType: 'disc'
        },
        '& .ol-li': {
            listStyleType: 'decimal'
        },
        '& .table-static': {
            width: "100%",
		    textAlign: 'left',
		    borderCollapse: 'collapse'
            
        },
        '& .table-static thead tr': {
            fontFamily: "ISSFFontBlack",
            fontSize: 0.625,
            textTransform: 'Uppercase',
            color: '#676767',
            
            borderBottom: '1px solid #BBBBBB'
        },
        '& .table-static th':{
            padding: '0.5rem 0.5rem 1rem 0.5rem',
        },
        '& .table-static tr': {
            fontFamily: "ISSFFont",
            fontSize: 1,
            textTransform: 'Capitalize',
            color: '#1F2E3D',
            
            borderBottom: '1px solid #DEDEDE'
        },
        '& .table-static td':{
            padding: '1rem 0.5rem 1rem 0.5rem',
        },
    }
}));