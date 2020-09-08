import { createUseStyles } from 'react-jss';

export default createUseStyles(theme => ({
    header: {
        background: `linear-gradient(180deg, rgba(4, 62, 214, 0.4) 0%, rgba(133, 6, 6, 0.432) 71.66%), url(${require('./plakatte_crush_them.jpg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: [1, 0],
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
    },
    headerHomepage: {
        flexGrow: 1,
    },
    headerInner: {
        maxHeight: 5
    }
}))