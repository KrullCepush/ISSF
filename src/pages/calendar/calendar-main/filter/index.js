import React, { Fragment, useEffect } from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import { useService } from 'utils/reservices';

import Form from 'components/form';

export default function Filter(props) {
    const CommonService = useService('common');
    const CompetitionsService = useService('competitions');

    const { mobile, open, onClose, year } = props;
    const styles = useStyles();
    const { competition_type_categories = [] } = CommonService.metaInfo.payload;
    const { competition_type_category_id_in = [] } = CompetitionsService.filter;

    useEffect(() => {
        const competition_type_category_id_in = ['2', '3'];
        CompetitionsService.setCompetitionsFilter({
            competition_type_category_id_in,
        });
        CompetitionsService.getCompetitions({ year });
    }, []);

    function onChange(ev, form = {}) {
        const { competition_type_category_id_in = [] } = form;
        CompetitionsService.setCompetitionsFilter({
            competition_type_category_id_in,
        });
        CompetitionsService.getCompetitions({ year });
    }

    function onClickClose(ev) {
        ev.preventDefault();
        onClose();
    }

    function renderType(item, index) {
        return (
            <div key={item.id}>
                <input
                    id={`competition_type_category_id_in[${item.id}]`}
                    type="checkbox"
                    name="competition_type_category_id_in[]"
                    value={item.id}
                    checked={competition_type_category_id_in.includes(
                        String(item.id)
                    )}
                    className={styles.checkbox}
                    onChange={() => null}
                />
                <label
                    htmlFor={`competition_type_category_id_in[${item.id}]`}
                    className={styles.button + ' color_' + item.id}
                >
                    {item.title}
                </label>
            </div>
        );
    }

    function renderForm() {
        return (
            <Form
                className={clsx(styles.filter, mobile && '_mobile')}
                onChange={onChange}
            >
                {/* {!mobile && <div className={styles.title}>Filter</div>} */}
                <div className={styles.title}>Filter</div>
                <div className={styles.buttons}>
                    {competition_type_categories.map(renderType)}
                </div>
            </Form>
        );
    }

    if (false) {
        if (open) {
            return (
                <div className={styles.filterMobile}>
                    <a href="#close" onClick={onClickClose}>
                        <img src={require('./close.svg')} />
                    </a>
                    {renderForm()}
                </div>
            );
        } else {
            return null;
        }
    } else {
        return renderForm();
    }
}
