import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';
import { useService } from 'utils/reservices';
import Flag from '../flag-federation';


export default function Federation({ data, continent = '', filter = '' }) {
    const CommonService = useService('common');
    const styles = useStyles();

    const country = CommonService.countriesByID[data.country_id] || {
        name: ''
    };
    const { address = {} } = data;

    if (continent) {
        if (continent !== data.continent) {
            return null;
        }
    }

    if (filter) {
        if (filter.toLowerCase() !== country.name[0].toLowerCase()) {
            return null;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div className={styles.country}>
                        <Flag code={country.ioc_code} />
                        <span className={styles.countryName}>
                            <div className={styles.countryNameDesc}>{country.name}, {country.ioc_code}</div>
                        </span>
                    </div>
                    <h4 className={styles.title}>
                        {data.title}
                    </h4>
                    <h5 className={styles.subtitle}>
                        {data.untranslated_title}
                        &nbsp;
                    </h5>
                    <div className={styles.membersWrap}>
                        <div className={styles.members}>
                            <div className={clsx(styles.member, styles.president)}>
                                <span>President:</span>
                                <span>
                                    {data.president}
                                </span>
                            </div>
                            <div className={styles.member}>
                                <span>Secretary General:</span>
                                <span>
                                    {data.general_secretary}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.address}>
                        {[address.line1, address.line2, address.line3, address.line4]
                            .filter(Boolean)
                            .map(line => (
                                <p className={styles.desc} key={line}>{line}</p>
                            ))
                        }
                    </div>
                    <div className={styles.contacts} dangerouslySetInnerHTML={{ __html: data.contact_info }} />
                </div>
            </div>
        </div>
    )
}