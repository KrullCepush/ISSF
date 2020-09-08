import React, { useState } from 'react';
import Form from 'components/form';
import PageHeader from 'components/page-header';
import Select from 'components/form-inputs/select/stroked';
import useStyles from './use-styles';
import { useService } from 'utils/reservices';

Tools.defaultProps = {
    onChange(){}
}

const disciplines = [
    { title: 'Shotgun', value: 'SH' },
    { title: 'Rifle', value: 'RI' },
    { title: 'Pistol', value: 'PI' }
];

export default function Tools(props) {
    const CommonService = useService('common');
    const styles = useStyles();
    const [ form, setForm ] = useState({
        search: "",
        country: "",
        discipline: ""
    });

    const countries = CommonService.metaInfo.payload.countries;
    
    function onChange(ev, form) {
        props.onChange(form);
        setForm(form);
    }

    return (
        <PageHeader title="ATHLETES DATABASE">
            <Form className={styles.form} onChange={onChange}>
                <input 
                    name="search" 
                    value={form.search} 
                    className={styles.input}
                    placeholder="Search by name..."
                />
                <Select 
                    options={countries}
                    value={form.country_id_eq}
                    getValue={item => item.id}
                    getTitle={item => item.name}
                    name="country_id_eq"
                    title="Country"
                />
                <Select 
                    options={disciplines}
                    value={form.discipline_eq}
                    name="discipline_eq"
                    title="Discipline"
                />
            </Form>
        </PageHeader>
    )
}