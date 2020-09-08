import { createUseStyles } from 'react-jss';

const competitionItemWidth = 0.25;

export default createUseStyles(theme => ({
    container: {
        flex: 1,
        outline: 'none'
    },
    wrapper: {
        outline: 'none'

    },
    interactionDisabled: {
        outline: 'none'

    },
  
    navBar: {
        outline: 'none'

    },
    navButtonPrev: {
        outline: 'none'

    },
    navButtonNext: {
        outline: 'none'

    },
    navButtonInteractionDisabled: {
        outline: 'none'

    },
  
    months: {
        outline: 'none'

    },
    month: {
        outline: 'none'
    },
    caption: {
        outline: 'none',
        display: 'none',
        ['._year &']: {
            display: 'flex',
            fontFamily: 'ISSFFontBlack',
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: 1,
            lineHeight: '120%',
            textTransform: 'capitalize',
            color: '#2A3A43',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    weekdays: {

    },
    weekdaysRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridGap: 0.5
    },
    weekday: {
        height: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        display: 'grid',
        gridGap: '0.25em'
    },
    week: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridGap: '0.25em'
    },
    day: {
        border: '1px solid #8C9599',
        borderRadius: '3px',
        padding: ['0.25em', 0],
        outline: 'none',
        cursor: 'pointer'
    },
    date: {
        padding: [0, '0.7em'],
        fontSize: 0.7, 
        color: theme.colors.blueDark.string(),
        ['$selected > &']: {
            color: theme.colors.white.string(),
        }
    },
    footer: {

    },
    todayButton: {

    },
    today: {
        borderColor: theme.colors.blueDark.string(),
        borderWidth: '2px',
    },
    selected: {
        background: theme.colors.blueDark.string(),
        borderColor: theme.colors.blueDark.string(),
        fontFamily: 'ISSFFontBlack'
    },
    disabled: {

    },
    outside: {
        opacity: 0.3
    },
    competitions: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '12px',
        margin: ['0.25em', 0],
        ['._year &']: {
            fontSize: '8px',
        },
        [theme.media.sm_]: {
            fontSize: '16px',
            ['._year &']: {
                fontSize: '8px',
            }
        }
    },
    year: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 0.3,
        fontSize: 0.5,
        width: '100%',
        [theme.media.custom('sm', 'xl')]: {
            gridTemplateColumns: '1fr 1fr',
        },
        [theme.media.xl_]: {
            gridTemplateColumns: '1fr 1fr 1fr',
        }
    },
    months: {
        margin: [1, 0]
    },
    weekNumber:{}
}));

export const useSlotStyles = createUseStyles({
    slot: {
        position: 'relative',
        margin: [`${competitionItemWidth}em`, 0],
        height: `${competitionItemWidth}em`,
        background: color => color,
        opacity: 0,
        ['._year &']: {
            margin: 'none',
            margin: [`${competitionItemWidth / 2}em`, 0],
        },
        ['&._full']: {
            opacity: 1
        },
        ['&._start']: {
            opacity: 1,
            marginLeft: '15%'
        },
        ['&._end']: {
            opacity: 1,
            marginRight: '15%'
        },
        ['&:after']: {
            display: 'block',
            position: 'absolute',
            width: `${competitionItemWidth - 0.05}em`,
            height: `${competitionItemWidth * 2}em`,
            top: `${-competitionItemWidth/2}em`
        },
        ['&._start:after']: {
            background: color => color,
            content: '""',
            left: 0
        },
        ['&._end:after']: {
            background: color => color,
            content: '""',
            right: 0
        }
    },
});