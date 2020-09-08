import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import Breadcrumbs from 'components/breadcrumbs';
import PageInner from 'components/page-inner';
import Select from 'components/form-inputs/select';

import { useService } from 'utils/reservices';

import CalendarView from './calendar-view';
import ListView from './list-view';
import Filter from './filter';
import DayDescription from './day-description';
import Pagination from './pagination';
import { years, months } from './config';

function CalendarMain(props) {
    const styles = useStyles();
    const CompetitionsService = useService('competitions');
    const date = new Date();
    const [selectedDay, setSelectedDay] = useState(new Date());
    const [calendarView, setCalendarView] = useCalendarView(true);
    const defaultYear = process.env.isServer
        ? date.getFullYear()
        : window.sessionStorage.getItem('calendarYear') || date.getFullYear();
    const defaultMonth = process.env.isServer
        ? date.getMonth()
        : window.sessionStorage.getItem('calendarMonth') || date.getMonth();
    const [year, setYear] = useYear(defaultYear);
    const [month, setMonth] = useMonth(defaultMonth);
    const [yearly, setYearly] = useYearly(false);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    useEffect(() => {
        CompetitionsService.getCalendar(year);
        CompetitionsService.getCompetitions({ year });
    }, [year]);

    useEffect(() => {
        window.sessionStorage.setItem('calendarYear', year);
        window.sessionStorage.setItem('calendarMonth', month);
    }, [year, month]);

    date.setYear(year);
    date.setMonth(month, 1);

    function onChangeYear(ev) {
        setYear(ev.target.value);
    }

    function onChangeMonth(ev) {
        setMonth(ev.target.value);
    }

    function onChangeSelectedDay(date) {
        setSelectedDay(date);
    }

    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    <Breadcrumbs />
                    <div className={styles.wrapper}>
                        <div className={styles.calendar}>
                            <Filter
                                mobile
                                year={year}
                                open={mobileFilterOpen}
                                onClose={() => setMobileFilterOpen(false)}
                            />
                            <div className={styles.tools}>
                                <div className={styles.toolsDate}>
                                    {!yearly && (
                                        <Select
                                            value={month}
                                            options={months}
                                            className={styles.select}
                                            onChange={onChangeMonth}
                                            notSelectDisable
                                        />
                                    )}
                                    <Select
                                        value={year}
                                        options={years}
                                        className={styles.select}
                                        onChange={onChangeYear}
                                    />
                                </div>
                                <div className={styles.toolsYearly}>
                                    <button
                                        onClick={() => setYearly(!yearly)}
                                        className={styles.toolsButton}
                                    >
                                        {yearly ? 'Monthly' : 'Year'}
                                    </button>
                                </div>
                                <div className={styles.toolsViewMobile}>
                                    <button
                                        onClick={() =>
                                            setCalendarView(!calendarView)
                                        }
                                        className={clsx(styles.toolsButton)}
                                    >
                                        <img
                                            src={
                                                calendarView
                                                    ? require('./icons/calendar.svg')
                                                    : require('./icons/list.svg')
                                            }
                                        />
                                    </button>
                                    {/* <button
                                        className={clsx(styles.toolsButton)}
                                        onClick={() =>
                                            setMobileFilterOpen(true)
                                        }
                                    >
                                        <img
                                            src={require('./icons/options.svg')}
                                        />
                                    </button> */}
                                </div>
                                <div className={styles.toolsView}>
                                    <button
                                        onClick={() => setCalendarView(true)}
                                        className={clsx(
                                            styles.toolsButton,
                                            calendarView && '_active'
                                        )}
                                    >
                                        Calendar view
                                    </button>
                                    <button
                                        onClick={() => setCalendarView(false)}
                                        className={clsx(
                                            styles.toolsButton,
                                            !calendarView && '_active'
                                        )}
                                    >
                                        List view
                                    </button>
                                </div>
                            </div>
                            {calendarView ? (
                                <CalendarView
                                    date={date}
                                    yearly={yearly}
                                    selectedDay={selectedDay}
                                    setSelectedDay={onChangeSelectedDay}
                                />
                            ) : (
                                <ListView date={date} yearly={yearly} />
                            )}
                            {!yearly && (
                                <Pagination
                                    month={month}
                                    year={year}
                                    setMonth={setMonth}
                                    setYear={setYear}
                                />
                            )}
                        </div>
                        <aside className={styles.sidebar}>
                            <Filter year={year} />
                            <DayDescription
                                selectedDay={
                                    calendarView ? selectedDay : new Date()
                                }
                            />
                        </aside>
                    </div>
                </PageInner>
            </Wrap>
        </Wrap>
    );
}

function useCalendarView(defaultValue) {
    return useState(defaultValue);
}

function useYear(defaultValue) {
    return useState(defaultValue);
}

function useMonth(defaultValue) {
    return useState(defaultValue);
}

function useYearly(defaultValue) {
    return useState(defaultValue);
}

export default CalendarMain;
