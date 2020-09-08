import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import qp from 'query-params-helpers';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Breadcrumbs from 'components/breadcrumbs';
import Form from 'components/form';
import Table from 'components/table';
import Select from 'components/form-inputs/select/stroked';
import { useLocation, useHistory } from 'react-router-dom';
import { useService } from 'utils/reservices';
import useStyles from './use-styles';

import YearResults from './year-results';
import { doCapitalize } from 'helpers/string';

const breadcrumbs = [{
    link: '/calendar',
    title: 'Calendar'
}, {
    link: '/calendar/results',
    title: 'Results'
}];

export default function HistoricalResults() {
    const CommonService = useService('common');
    const ResultsService = useService('results');
    const styles = useStyles();
    const location = useLocation();
    const history = useHistory();
    const search = qp.parse(location.search) || {};
    const filterData = ResultsService.filterData;

    const getDisciplineTitle = (item) => {
      const discipline = CommonService.eventDisciplineСategoriesByID[item] || {};
      return `${discipline.title} ${doCapitalize(discipline.gender === 'mixed' ? 'Team' : discipline.gender)}`;
    };

    const {
        competition_types = [],
        years = [],
        cities = [],
        event_discipline_categories = [],
        age_categories = []
    } = filterData.payload;

    useEffect(() => {
        ResultsService.getHistoricalFilterData(search);
        ResultsService.getHistoricalEntries(search);
    }, [location.search]);

    function onChange(ev, search, data) {
        history.push(search
            ? location.pathname + '?' + search
            : location.pathname
        )
    }

    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    <Breadcrumbs items={breadcrumbs} />
                    <h2 className={styles.title}>Search results</h2>
                    <Form onChange={onChange} className={styles.filter} serialize="url">
                        <Select
                            className={styles.select}
                            options={competition_types}
                            value={search.competition_type_id}
                            getValue={item => item.id}
                            name="competition_type_id"
                            title="Championship"
                        />
                        {/* {Boolean(years.length) && ( */}
                        <Select
                            className={styles.select}
                            options={years}
                            disabled={!years.length}
                            value={search.year}
                            name="year"
                            title="Year"
                            getValue={item => {
                                const d = new Date(item);
                                return d.getFullYear();
                            }}
                            placeholder={!years.length ? 'Select championship' : void 0}
                        />
                        {/* )} */}
                        {/* {Boolean(cities.length) && ( */}
                        <Select
                            className={styles.select}
                            options={cities}
                            disabled={!cities.length}
                            value={search.city}
                            name="city"
                            title="City"
                            getValue={item => item}
                            getTitle={item => doCapitalize(item)}
                        />
                            <Select 
                                className={styles.select}
                                options={event_discipline_categories}
                                disabled={!event_discipline_categories.length}
                                value={search.event_discipline_category_id}
                                name="event_discipline_category_id"
                                title="Event"
                                getValue={item => item}
                                getTitle={item => doCapitalize(getDisciplineTitle(item))}
                            />
                        {/* )} */}
                        {/* {Boolean(age_categories.length) && ( */}
                        <Select
                            className={styles.select}
                            options={age_categories}
                            disabled={!age_categories.length}
                            value={search.age_category}
                            name="age_category"
                            title="Age category"
                            getValue={item => item}
                            getTitle={item => doCapitalize(item)}
                        />
                        {/* )} */}
                    </Form>
                    {Boolean(ResultsService.historicalEntries.payload.length) && (
                        <Table
                            classNames={styles}
                            data={ResultsService.historicalEntries.payload}
                            columns={[{
                                name: 'rank',
                                title: 'Rk',
                                orderDisabled: true
                            }, {
                                name: 'athlete_name',
                                title: 'Name',
                                orderDisabled: true,
                                render: ((row, col, props) => <Link to={`/athletes/${row.item.athlete_id}`}> {row.item.athlete_name} </Link>)
                            }, {
                                name: 'athlete_nation',
                                title: 'Nat',
                                orderDisabled: true
                            }, {
                                name: 'qualification_score',
                                title: 'Qualification',
                                orderDisabled: true
                            }, {
                                name: 'final_score',
                                title: 'Final',
                                orderDisabled: true
                            }]}
                        />
                    )}
                    <div className={styles.years}>
                        <YearResults year={2019} />
                        <YearResults year={2018} />
                    </div>
                </PageInner>
            </Wrap>
        </Wrap>
    )
}