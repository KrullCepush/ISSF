import React from 'react';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Flag from 'components/flag';
import { useService } from 'utils/reservices';
import clsx from 'clsx';

const medalIcons = {
    gold: require('./gold.svg'),
    silver: require('./silver.svg'),
    bronze: require('./bronze.svg')
}

export default function MedalStanding() {
    const styles = useStyles();
    const [medals, setMedals] = React.useState([]);
    const [medalsTotal, setMedalsTotal] = React.useState({});

    const CompetitionsService = useService('competitions');
    const competition = CompetitionsService.competition.payload;

    React.useEffect(() => {
        const medals = Object.entries(competition.medals);
        const medalsTotalForm = { gold: 0, silver: 0, bronze: 0, total: 0 }


        medals.forEach((item, index, array) => {
            const [key, value] = item;

            let place;

            if (index > 0) {
                const prev = array[index - 1];
                place = prev.value.scoring === value.scoring ? prev.place : index + 1
            } else {
                place = index + 1;
            }

            array[index] = { key, value, place }
        })

        medals.forEach((medal) => {
            medalsTotalForm.gold += medal.value.gold;
            medalsTotalForm.silver += medal.value.silver;
            medalsTotalForm.bronze += medal.value.bronze;
            medalsTotalForm.total += medal.value.gold + medal.value.silver + medal.value.bronze
        })
        setMedals(medals);
        setMedalsTotal(medalsTotalForm)

    }, [competition.medals]);


    return (
        <Wrap>
            <Wrap>
                <PageInner className={styles.container}>
                    <h2 className={styles.title}>medal standing</h2>
                    <div>
                        {medals.map(({ key, value, place }, index) => (
                            <div key={key} className={styles.row}>
                                <div className={clsx(styles.col, styles.place)}>
                                    {place}
                                </div>
                                <div className={clsx(styles.col, styles.country)}>
                                    <Flag code={key} width={35} />
                                </div>
                                {['gold', 'silver', 'bronze'].map(type => (
                                    <div key={type} className={clsx(styles.col, styles.medals)}>
                                        <img src={medalIcons[type]} alt="" />
                                        <span className={styles.count} data-count={value[type]}>
                                            {value[type]}
                                        </span>
                                    </div>
                                ))}
                                <div className={clsx(styles.col, styles.total)}>{value.total}</div>
                            </div>
                        ))}
                        <div className={styles.row}>
                            <div className={clsx(styles.col, styles.place)}>
                                Total:
                                </div>
                            <div className={clsx(styles.col, styles.country)}>
                            </div>
                            {['gold', 'silver', 'bronze'].map(type => (
                                <div key={type} className={clsx(styles.col, styles.medals)}>
                                    <img src={medalIcons[type]} alt="" />
                                    <span className={styles.count} data-count={medalsTotal[type]}>
                                        {medalsTotal[type]}
                                    </span>
                                </div>
                            ))}
                            <div className={clsx(styles.col, styles.medalsTotal)} >{medalsTotal.total}</div>
                        </div>
                    </div>
                </PageInner>
            </Wrap>
        </Wrap>
    )
}