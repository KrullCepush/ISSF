import React from 'react';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Breadcrumbs from 'components/breadcrumbs';

import Loader from 'components/loader';
import BracketBlock from 'components/bracket-block';
import useStyles from './styles';

import AthleteInfo from './athlete-info';
import AthleteMedia from './athlete-media';
import Champ from './champ';
import { useAthlete, useAchievments } from './hooks';
import createMedals from './medals'

import clsx from "clsx"





export default function AthletePage() {
    const styles = useStyles();

    const { isInited, pending, payload: athlete } = useAthlete();
    const achievments = useAchievments();

    const medals = createMedals(achievments)

    return (
        <Wrap>
            <PageInner>
                <Wrap>
                    <Breadcrumbs />
                </Wrap>
                {!isInited || pending ? (
                    <Loader />
                ) : (
                        <div className={styles.container}>
                            <div className={styles.info}>
                                <AthleteInfo data={athlete} />
                            </div>
                            <div className={styles.media}>
                                <AthleteMedia data={athlete} />
                            </div>

                            <div className={styles.achievments}>
                                <Wrap
                                    style={{
                                        flexDirection: 'column',
                                        paddingLeft: 0,
                                    }}
                                >

                                    <div className={styles.medalsWrap}>
                                        <h2 className={styles.achievmentsTitle}>
                                            achievments
                                        </h2>
                                        <div className={styles.medalStanding}>
                                            {['gold', 'silver', 'bronze'].map(element => {
                                                if (medals[element] !== 0) {
                                                    return (
                                                        <div className={styles.medalStandingWrap}>
                                                            <img src={require(`./${element}.svg`)} alt={element} />
                                                            <div className={styles.medal}> {medals[element]} </div>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </div>

                                    {achievments.map(item => (
                                        <BracketBlock
                                            key={item.key}
                                            title={
                                                item.category.title +
                                                ` (${item.key})`
                                            }
                                        >
                                            {item.value.map(champ => (
                                                <Champ
                                                    key={champ.key}
                                                    data={champ}
                                                />
                                            ))}
                                        </BracketBlock>
                                    ))}

                                </Wrap>
                            </div>
                        </div>
                    )}
            </PageInner>
        </Wrap>
    );
}


