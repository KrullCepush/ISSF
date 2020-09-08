import React from 'react';
import Form from 'components/form';
import { useService } from 'utils/reservices';

import Select from 'components/form-inputs/select/stroked';
import RadioButtons from 'components/form-inputs/radio-buttons';
import useStyles from './use-styles';

export default function Filter(props) {
    const styles = useStyles();
    const AthletesService = useService('athletes');
    const [ form, setForm ] = React.useState({
        type: 'last_ten'
    });

    React.useEffect(() => {
        const params = {
            q: {}
        };

        switch (form.type) {
            case 'last_ten': params.per_page = 10; break;
            case 'world': params.q.record_type_eq = 'world'; break;
            case 'olympic': params.q.record_type_eq = 'olympic'; break;
            default: params.per_page = 10;
        }

        switch(form.gender) {
            case 'women': params.q.gender_eq = 'women'; break;
            case 'men': params.q.gender_eq = 'men'; break;
        }

        AthletesService.getRecords(params);
    }, [form])

    function onChange(ev, data) {
        setForm(data);
    }
    return (
        <>
            <Form onChange={onChange} className={styles.form}>
                <RadioButtons
                    name="type"
                    value={form.type}
                    items={[{
                        title: 'Last 10',
                        value: 'last_ten'
                    },{
                        title: 'World',
                        value: 'world'
                    },{
                        title: 'Olympic',
                        value: 'olympic'
                    }]}
                />
                <Select
                    name="gender"
                    value={form.gender}
                    options={[{
                        title: 'Men',
                        value: 'men',
                        key: 1,
                    },{
                        title: 'Women',
                        value: 'women',
                        key: 2,
                    }]}
                />
            </Form>
        </>
    )
}

Filter.defaultProps = {
    onChange(){}
}