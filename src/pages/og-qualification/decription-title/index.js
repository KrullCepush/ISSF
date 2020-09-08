import React from 'react';
import useStyles from '../use-styles';

export default function DescriptionTitle() {
    const styles = useStyles();

    return (
        <div className={styles.titleWrap}>
            <div className={styles.titleWrapHeader}>
                <div className={styles.titleHead}>
                    OLYMPIC QUOTA PLACES
                    </div>
                <div className={styles.titleHeadDecorationWrap}>
                    <div className={styles.titleHeadDecorationLow} />
                    <div className={styles.titleHeadDecoration} />
                </div>
            </div>
            <div className={styles.titleMainWrap}>
                <div className={styles.titleDescWrap}>
                    <div className={styles.titleDescHead}>
                        What is an Olympic Quota Place?
                    </div>
                    <div className={styles.titleDescParagraph}>
                        Participation in the Olympic Shooting events is not guaranteed.
                        Each national shooting federation must earn "Quota Places" - one starting
                        position to send athletes to the next Olympic Games. Only a total of 360 athletes
                        will be able to compete in the 15 events across the Olympic disciplines at the 2020 Tokyo Olympic Games.
                    </div>
                    <div className={styles.titleDescParagraph}>
                        Athletes who have won a Quota Place in the Mixed Team Events at the WCH Changwon 2018
                        are (still) eligible to obtain a Quota Place in Individual Events in the following Qualifying Competitions.
                    </div>
                </div>
                <div className={styles.titleDataWrap}>
                    <div className={styles.titleData}>
                        <div className={styles.titleDataHead}>
                            Qualification System for Tokyo 2020
                        </div>
                        <div className={styles.titleDataLinkWrap}>
                            <a target="_blank"
                                href='https://www.issf-sports.org/getfile.aspx?inst=439&pane=1&mod=docf&file=FINAL%20-%202019-09-02%20-%20Tokyo%202020%20-%20Qualification%20system%20-%20Shooting%20-%20eng%20.pdf'
                                className={styles.titleDataLinkBefore}>
                                <div className={styles.titleDataLink}>
                                    <div className={styles.titleDataLinkHead}>
                                        English version
                                    </div>
                                    <div className={styles.titleDataLinkSize}>
                                        PDF, 252.8 kb
                                    </div>
                                </div>
                            </a>
                            <a target="_blank"
                                href=' https://www.issf-sports.org/getfile.aspx?inst=439&pane=1&mod=docf&file=FINAL%20-%202019-09-02%20-%20Tokyo%202020%20-%20Qualification%20system%20-%20Shooting%20-%20fre.pdf'
                                className={styles.titleDataLinkBefore}>
                                <div className={styles.titleDataLink}>
                                    <div className={styles.titleDataLinkHead}>
                                        French version
                                    </div>
                                    <div className={styles.titleDataLinkSize}>
                                        PDF, 233.1 kb
                                     </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.titleDataColumn}>
                        <div className={styles.titleDataHead}>
                            Information about Tokyo Olympic Games
                        </div>
                        <div className={styles.titleDataLinkWrapSecond}>
                            <a target="_blank"
                                href='https://www.issf-sports.org/getfile.aspx?inst=439&pane=1&mod=docf&file=Rules%20for%20Rifle%20and%20Pistol%20Mixed%20Team%20events%20-%20Tokyo%202020.pdf'
                                className={styles.titleDataLinkBefore}>
                                <div className={styles.titleDataLink}>
                                    <div className={styles.titleDataLinkHead}>
                                        Rules of Mixed Team Events for Air Pistol and Air Rifle
                                     </div>
                                    <div className={styles.titleDataLinkSize}>
                                        PDF, 649.4 Kb
                                     </div>
                                </div>
                            </a>
                            <a target="_blank"
                                href=' https://www.issf-sports.org/getfile.aspx?inst=439&pane=1&mod=docf&file=Rules%20for%20Trap%20Mixed%20Team%20events%202019-2020.pdf'

                                className={styles.titleDataLinkBefore}>
                                <div className={styles.titleDataLink}>
                                    <div className={styles.titleDataLinkHead}>
                                        Trap Team Mixed Event Format
                                    </div>
                                    <div className={styles.titleDataLinkSize}>
                                        PDF, 122 Kb
                                    </div>
                                </div>
                            </a>
                            <a target="_blank"
                                href='https://www.issf-sports.org/getfile.aspx?inst=439&pane=1&mod=docf&file=Tokyo-2020-Schedule-Final.pdf'
                                className={styles.titleDataLinkBefore}>
                                <div className={styles.titleDataLink}>
                                    <div className={styles.titleDataLinkHead}>
                                        Tokyo 2020 Schedule
                                    </div>
                                    <div className={styles.titleDataLinkSize}>
                                        PDF, 58 Kb
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}