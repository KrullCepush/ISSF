import { createUseStyles } from 'react-jss';
import { inherits } from 'util';

export default createUseStyles(theme => ({
    navigationContainer: {
        display: 'flex',
        margin: [0, 'auto'],
        justifyContent: 'space-between',
        // margin: [0, -0.5],
        [theme.media.md_]: {
            width: '100%',

        },
    },

    // link: {
    //     ...theme.typo.title,
    //     padding: [0, 0.5],
    //     color: theme.colors.primaryDark.alpha(0.6).string(),
    //     ['&.active']: {
    //         color: theme.colors.primaryDark.string(),

    //     }
    // },

    link: {
        ...theme.typo.title,
        // padding: [0, 0.5],
        flex: 1,
        display: 'inherit',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 5,
        marginRight: 1,
        textAlign: 'center',
        color: theme.colors.primaryDark.alpha(0.6).string(),
        ['&.active']: {
            color: theme.colors.primaryDark.string(),
            ['&.active:after']: {
                display: 'block',
                content: '""',
                left: 0,
                marginTop: 1,
                height: '6px',
                width: '100%',
                backgroundColor: 'black',
            },
            ['&.disabled']: {
                pointerEvents: 'none',
                // color: theme.colors.grayLighter.string(),

            }
        },
        [theme.media._sm]:  {
            fontSize: 0.8,
            marginRight: 0,
            height: 4,
        }
    }

}))