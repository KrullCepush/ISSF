import React, { useState } from 'react';
import Form from 'components/form';
import PageHeader from 'components/page-header';
import Select from 'components/form-inputs/select/stroked';
import useStyles from './use-styles';
import { useService } from 'utils/reservices';
import moment from 'moment';


Tools.defaultProps = {
    onChange(){}
}

export default function Tools(props) {
    const CommonService = useService('common');
    const styles = useStyles();
    const [ form, setForm ] = useState({
        search: ""
    });

    const years = (CommonService.metaInfo.payload.articles || {}).years;

    function onChange(ev, form) {
        props.onChange(form);
        setForm(form);
    }

    return (
        <PageHeader title="OFFICIAL NEWS">
            <Form className={styles.form} onChange={onChange}>
                <input 
                    name="search" 
                    value={form.search} 
                    className={styles.input}
                    placeholder="Search by title..."
                />
                <Select 
                    options={years}
                    value={form.year_eq}
                    getTitle={item => moment(item).format('YYYY')}
                    getValue={item => moment(item).format('YYYY')}
                    name="year_eq"
                    title="Year"
                />
                {/*<Select */}
                {/*    options={stub}*/}
                {/*    value={form.discipline}*/}
                {/*    name="media"*/}
                {/*    title="Media"*/}
                {/*/>*/}
            </Form>
        </PageHeader>
    )
}