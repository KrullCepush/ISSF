import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    container:{},
    th: {
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        ['&._disabled']: {
            pointerEvents: 'none'
        }
    },
    icon: {
        marginLeft: 0.5,
        transition: 'transform 0.2s ease-out 0s;'
    },
    desc: {
        transform: 'rotate(180deg)'
    }
}))