import React from 'react';
import Form from 'components/form';
import { useService } from 'utils/reservices'

import Select from 'components/form-inputs/select/stroked';
import RadioButtons from 'components/form-inputs/radio-buttons';
import useStyles from './use-styles';

const category = [
    { title: 'All first places', value: '1' },
    { title: 'First three', value: '3' },
    { title: 'Top ten', value: '10' },
    { title: 'Complete Ranking by Event', value: 'event' }
];

export default function Filter(props) {
    const styles = useStyles();
    const AthletesService = useService('athletes');
    const CommonService = useService('common');
    const [ form, setForm ] = React.useState({
        period: 'world_rankings',
        category: '1',
        event: '',
        gender: 'men'
    });

    const byEvent = form.category === 'event';
    React.useDebugValue(form)

    React.useEffect(() => {
        const params = {}

        params.q = {};
        params.period = form.period;
        params.q.sorts = 'event_discipline_category_id';

        if (form.gender) {
            params.q.gender_eq = form.gender;
        }

        if (byEvent) {
            if (form.event) {
                params.q.event_discipline_category_id_eq = form.event
                AthletesService.getWorldRanks(params);
            }
        } else {
            params.q.rank_lteq = form.category;
            AthletesService.getWorldRanks(params);
        }
    }, [form])

    function onChange(ev, data, form) {
        setForm(data);
        props.onChange(ev, data, form)
    }

    const events = CommonService.metaInfo.payload.world_rank_discipline_categories_select_options.map(item => ({
        title: item.title + ' ' + item.gender,
        value: item.id
    }));

    const title = (() => {
        if (byEvent) {
            const event = events.find(ev => ev.value == form.event) || {}
            return event.title
        } else {
            return category.find(cat => cat.value == form.category).title + ' - ' + form.gender
        }
    })();

    return (
        <>
            <Form onChange={onChange} className={styles.form}>
                <RadioButtons
                    name="period"
                    value={form.period}
                    items={[{
                        title: 'World ranking',
                        value: 'world_rankings'
                    },{
                        title: '2019',
                        value: 'yearly_world_rankings'
                    }]}
                />
                <Select
                    options={category}
                    value={form.category}
                    name="category"
                    title="RANKING CATEGORY"
                    notSelectDisable={true}
                />
                {byEvent ? (
                    <Select
                        options={events}
                        value={form.event}
                        getValue={item => item.value}
                        getTitle={item => item.title}
                        name="event"
                        title="Event"
                    />
                ) : (
                    <RadioButtons
                        defaultValue="men"
                        name="gender"
                        value={form.gender}
                        items={[{
                            title: 'Men',
                            value: 'men'
                        },{
                            title: 'Women',
                            value: 'women'
                        }]}
                    />
                )}
            </Form>
            <h2 className={styles.title}>{title}</h2>
        </>
    )
}

Filter.defaultProps = {
    onChange(){}
}