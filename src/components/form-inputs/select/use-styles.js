import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    select: {
        cursor: 'pointer',
        position: 'relative',
        appearance: 'none',
        background: 'transparent',
        border: 0,
        outline: 'none',
        padding: 0,
        paddingRight: '1.25em',
        background: {
            image: `url(${require('./chevron-bottom.svg')})`,
            repeat: 'no-repeat',
            position: 'right center',
            size: '1em'
        }
    },
    nativeSelect: {
        opacity: 0,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        cursor: 'pointer',
        '&[disabled]': {
            cursor: 'default'
        }
    },
    label: {
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
        display: 'block',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        ['&._placeholder']: {
            color: theme.colors.black.alpha(0.5).string()
        }
    }
}));