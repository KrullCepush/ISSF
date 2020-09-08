import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    disciplineBlock: {
        marginBottom: 3
    },
    title: {
        ...theme.typo.title,
        fontSize: 2,
        textAlign: 'right',
        [theme.media._md]: {
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            '&:after, &:before': {
                display: 'block',
                content: '""',
                height: '2px',
                background: theme.colors.primaryDark.string()
            },
            '&:before': {
                marginRight: 0.5
            },
            '&:after': {
                marginLeft: 0.5
            }
        },
        [theme.media.md_]: {
            width: 15,
        }
        
    }, 
    content: {

    }
}))