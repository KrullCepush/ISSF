import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container: {
        backgroundColor: theme.colors.primary.string(),
        border: `1px solid ${theme.colors.primary.string()}`,
        display: 'grid',
        gridAutoFlow: 'column',
        gridGap: '1px',
        borderRadius: '4px',
        overflow: 'hidden',
        marginTop: 0.8,
        gridAutoColumns: '1fr',
        '& > label': {
            position: 'relative',
            background: '#fff',
            ...theme.typo.title,
            lineHeight: 2.4,
            fontSize: 0.8,
            padding: [0, 0.8],
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#656565',
            '&._checked': {
                backgroundColor: theme.colors.primary.string(),
                color: '#fff'
            },
            '& > input': {
                position: 'absolute',
                opacity: 0,
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                cursor: 'pointer',
            }
        }
    }
}))