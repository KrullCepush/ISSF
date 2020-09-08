import React from 'react';
import useStyles from './use-styles';
import { useService } from 'utils/reservices';
import moment from 'moment';





export default function Component({year}) {
    const [data, setData] = React.useState([]);
    const styles = useStyles();
    const CompetitionsService = useService('competitions');
    const CommonService = useService('common');

    const total = {};

    React.useEffect(()=>{
        CompetitionsService.getCompetitionYear(year).then(function(response){
            setData(response.body)
        })
    }, [0]);


    return (

        <div className={styles.container}>
            <h2 className={styles.title}>results in {year} year</h2>
            {data.map(item => {
                const country = CommonService.countriesByID[item.country_id] || {};

                return (
                    <div key={item.id} href="#" className={styles.item}>
                        <div className={styles.itemDates}>
                            {moment(item.start_at).format('DD.MM')} - {moment(item.end_at).format('DD.MM')}
                        </div>
                        <div className={styles.itemMain}>
                            <div className={styles.itemTitle}>
                            {item.title}
                            </div>
                            <div className={styles.itemGeo}>
                                {country.name}, {item.location}
                            </div>
                        </div>
                        <a className={styles.itemImageContainer} href={item.results_book_url}>
                            <img src={require('assets/icons/pdf-icon.svg')} />
                        </a>
                    </div>
                )
            })}

        </div>
    )
}