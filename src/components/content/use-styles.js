import { createUseStyles } from 'react-jss';
import { config } from 'rxjs';

export default createUseStyles(theme => ({
    content: {
        background: theme.colors.white.string(),
        display: 'flex',
        boxShadow: `0px 4px 14px ${theme.colors.black.alpha(0.65).string()}`,
        marginBottom: theme.footer.height,
        flexGrow: 1,
        flexDirection: 'column',
        zIndex: 1,
        marginBottom: 8,
    },
    contentHome: {
        flexGrow: 0
    }
}))
