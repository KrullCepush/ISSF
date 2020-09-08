import color from 'color';

const lightOpacity = 0.6;
const lighterOpacity = 0.35;

const sizes = {
    xs: 320,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

function media(min, max) {
    min = sizes[min] || min;
    max = sizes[max] || max;
    min = min && `(min-width: ${min}px)`;
    max = max && `(max-width: ${max}px)`;

    return `@media ${[min, max].filter(Boolean).join(' and ')}`
}

export default {
    media: {
        xs_: media('xs'),
        sm_: media('sm'),
        md_: media('md'),
        lg_: media('lg'),
        xl_: media('xl'),
        _xs: media(null, 'xs'),
        _sm: media(null, 'sm'),
        _md: media(null, 'md'),
        _lg: media(null, 'lg'),
        _xl: media(null, 'xl'),
        xs_sm: media('xs', 'sm'),
        sm_md: media('sm', 'md'),
        md_lg: media('md', 'lg'),
        lg_xl: media('lg', 'xl'),
        custom: media,
        ...sizes,
    },

    colors: {
        white: color('#FFFFFF'),
        gray: color('#797979'),
        grayLight: color('#B4B4B4'),
        grayLighter: color('#d7d7d7'),
        grayLighterer: color('#eeeeee'),
        gray4: color('#DEDEDE'),
        blueDark: color('#125981'),

        black: color('#000000'),

        gold: color('#FFBE5E'),

        primary: color('#0E77B1'),
        primaryDark: color('#2A3A43'),

        filterRed: color('#FF1E1E'),
        filterBlue: color('#1E85FF'),
        filterOrange: color('#FFA51E'),
        filterGray: color('#AEAEAE'),



    },
    typo: {
        medium: {
            fontFamily: 'ISSFFONTMedium',
        },
        black: {
            fontFamily: 'ISSFFontBlack',
        },
        title: {
            fontFamily: 'ISSFFontBlack',
            textTransform: 'uppercase',
            color: '#2A3A43',
        },
        italic: {
            fontFamily: 'Arial Narrow',
            fontStyle: 'italic'
        }
    },
    header: {
        height: 5
    },
    footer: {
        height: 8
    }
}