import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => {

    const white = theme.colors.white;
    const transparentWhite = theme.colors.white.alpha(0.6);

    return ({
        publishedAt: {
            color: transparentWhite.string(),
            lineHeight: '1.2',
            fontSize: 0.83,
            [theme.media.md_]: {
                '&': {
                    fontSize: 1.25
                }
            }
        },
        publishedBy: {
            color: transparentWhite.string(),
            lineHeight: '1.2',
            marginBottom: 0.5,
            [theme.media.md_]: {
                '&': {
                    fontSize: 0.875,
                }
            }
        },
        title: {
            color: white.string(),
            lineHeight: '1.2',
            [theme.media.md_]: {
                '&': {
                    paddingRight: 4,
                    fontSize: 1.5625,
                    marginBottom: 4,
                }
            }
        }
    })
});