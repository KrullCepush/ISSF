import React, { Fragment } from 'react';
// import moment from 'moment';
import clsx from 'clsx';
import useStyles, { useSlotStyles } from './use-styles';
import DayPicker from 'react-day-picker';
import { useService } from 'utils/reservices';
import {useCalendarCompetitions} from '../use-calendar';

const yearMonths = new Array(12).fill(null);

export default function CalendarView(props) {
    const {
        yearly=false,
        date
    } = props;
    const styles = useStyles();

    if (yearly) {
        return (
            <div className={clsx(styles.months, styles.year, '_year')}>
                {yearMonths.map((_, index) => {
                    date.setMonth(index, 1);
                    return <Month month={new Date(date)} styles={styles} selectedDay={props.selectedDay} setSelectedDay={props.setSelectedDay}/>
                })}
            </div>
        )
    } else {
        return (
            <div className={styles.months}>
                <Month month={date} styles={styles} selectedDay={props.selectedDay} setSelectedDay={props.setSelectedDay}/>
            </div>
        )
    }
}

function Month({month, styles, selectedDay, setSelectedDay}) {
    return (
        <DayPicker 
            showOutsideDays
            selectedDays={selectedDay}
            onDayClick={setSelectedDay}
            month={month}
            classNames={styles}
            renderDay={(_date, modifiers) => {
                const date = new Date(_date);
                date.setUTCHours(0, 0, 0)

                return <Day date={date} styles={styles} modifiers={modifiers}/>
            }}  
        />
    )
}

function Day({date, styles}) {
    const CommonService = useService('common');
    const { competition_type_categories=[] } = CommonService.metaInfo.payload;
    const competitions = useCalendarCompetitions(date);

    return (
        <Fragment>
            <div className={styles.date}>
                {date.getUTCDate()}
            </div>
            <div className={styles.competitions}>
                {competition_type_categories.map(category => {
                    return (
                        <Slot 
                            key={category.id} 
                            category={category}
                            competitions={competitions}
                            date={date}
                        />
                    );
                })}
            </div>
        </Fragment>
    )
}

function Slot({competitions, category, date}) {
    const styles = useSlotStyles(category ? category.color : '#fff');
    const classNames = competitions.filter(item => item.competition_type_category_id === category.id).reduce((res, item) => {
        const startDate = new Date(item.start_at);
        const endDate = new Date(item.end_at);

        if (res._full || startDate < date && endDate > date) {
            return { 
                _full: true
            }
        } else if(res._start || +startDate === +date) {
            return { 
                _start: true
            }
        } else if(res._end || +endDate === +date) {
            return { 
                _end: true
            }
        } else {
            return res;
        }
    }, {});


    return <div className={clsx(styles.slot, classNames)}/>
}