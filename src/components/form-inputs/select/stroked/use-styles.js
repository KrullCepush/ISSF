import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    select: {
        minWidth: 10,
        border: '1px solid #8D8D8D',
        borderRadius: '4px',
        padding: [0, 2, 0, 0.5],
        position: 'relative',
        marginTop: 0.8,
        background: {
            image: `url(${require('./chevron-bottom.svg')})`,
            repeat: 'no-repeat',
            position: 'right center',
            size: '2em'
        },
        '&._disabled': {
            opacity: 0.6
        }
    },
    selectLabel: {
        ...theme.typo.title,
        lineHeight: 2.4,
        fontSize: 0.8,
        color: '#656565',

    },
    selectTitle: {
        position: 'absolute',
        backgroundColor: theme.colors.white.string(),
        left: 0.3,
        top: -0.4,
        padding: [0, '4px'],
        lineHeight: '1',
        ...theme.typo.title,
        fontSize: 0.625,
        color: '#676767',
    }
}))