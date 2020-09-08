import { getSortFunctionByProp } from 'helpers/array';

export default function(code, results) {
    switch (code) {
        case '112-3':
        case '113-3':
        case '95-3':
        case '96-3':
        case '55-3':
        case '56-3':
        case '60-3':
        case '61-3':
        case '88-3':
            return prepareRiflePistol(results);
        case '55-2':
        case '56-2':
        case '60-2':
        case '61-2':
        case '58-2':
        case '88-2':
        case '74-2':
        case '53-2':
            return prepareRiflePistolFinal(results);
        case '91-3':
        case '80-4':
        case '80-3':
        case '80-6':
        case '93-6':
            return prepareRifle3Positions(results);
        case '91-2':
        case '80-2':
        case '104-2':
            return prepareRifle3PositionFinal(results);
        case '93-3':
        case '100-3':
        case '104-3':
        case '104-4':
            return prepareRifle3Positions(results);
        case '93-2':
        case '100-2':
            return preparePistol25mFinal(results);
        case '112-2':
        case '113-2':
        case '95-2':
        case '96-2':
            return prepareShotgunFinal(results);
        case '57-2':
        case '57-3':
        case '62-2':
        case '62-3':
        case '115-3':
        case '115-2':
            return prepareRiflePistolMixed(results);
        default:
            return prepareRiflePistol(results);
    }
}

/**
 * @returns {[{
 *   athlete: {},
 *   info: {},
 *   series: [{
 *     stage: String,
 *     score: String
 *   }],
 *   total: Number
 * }]}
 */
function prepareRiflePistol(results) {
    return results.map((item, index) => {
        const { athlete, info, exercise_groups } = item;
        const [group] = exercise_groups;
        const total = Number(info.total_competition_score);

        if (!group) {
            return { athlete, info, series: [], total: '' };
        }
        const series = group.exercise_stages.map(stage => ({
            stage: stage.info.stage_number,
            score: stage.info.total_score,
        }));

        return { athlete, info, series, total };
    });
}

/**
 * @returns {[{
 *   athlete: {},
 *   info: {},
 *   groups: [{
 *     title: String,
 *     columns: [{
 *       score: Number,
 *       targts: [{
 *         target: Number,
 *         round: Number
 *       }]
 *     }]
 *   }],
 *   total: Number
 * }]}
 */
function prepareRiflePistolFinal(results) {
    return results.map(item => {
        const { athlete, info, exercise_groups } = item;
        let score = 0;

        const groups = exercise_groups.map((group, index, array) => {
            const isLast = index === array.length - 1;
            let columns = [];

            if (isLast) {
                let [stage = {}] = group.exercise_stages;
                let { exercise_targets = [] } = stage;

                while (exercise_targets.length) {
                    let targets = exercise_targets.splice(0, 2).filter(Boolean);

                    score = targets.reduce((score, target) => {
                        return (score * 10 + Number(target.score) * 10) / 10;
                    }, score);

                    columns.push({ score, targets });
                }
            } else {
                columns = group.exercise_stages.map(stage => {
                    score =
                        (score * 10 + Number(stage.info.total_score) * 10) / 10;

                    return {
                        score,
                        targets: stage.exercise_targets.map(target => {
                            return {
                                score: Number(target.score),
                                round: Number(target.round),
                            };
                        }),
                    };
                });
            }

            return {
                title: group.info.exercise_type,
                columns: columns,
            };
        });

        return { athlete, info, groups, score };
    });
}

/**
 * @returns {[{
 *   athlete: {},
 *   info: {},
 *   positions: [{
 *     name: String,
 *     subtotal: Number,
 *     series: [{
 *       stage: Number,
 *       score: Number
 *     }]
 *   }]
 *   series: [{
 *     stage: Number,
 *     score: Number
 *   }],
 *   total: Number
 * }]}
 */
function prepareRifle3Positions(results) {
    return results.map(item => {
        const { athlete, info, exercise_groups } = item;

        const total = Number(info.total_competition_score);
        const positions = exercise_groups.map(position => ({
            name: String(position.info.exercise_type),
            subtotal: Number(position.info.score),
            series: position.exercise_stages.map(stage => ({
                stage: Number(stage.info.stage_number),
                score: Number(stage.info.total_score),
            })),
        }));

        return { athlete, info, positions, total };
    });
}

function prepareRifle3PositionFinal(results) {
    function add(num1, num2) {
        return (+num1 * 10 + +num2 * 10) / 10;
    }
    return results.map(item => {
        let score = 0;
        let { KN, PR, ST } = item.exercise_groups.reduce(
            (res, item) => ({
                ...res,
                [item.info.exercise_type]: item,
            }),
            {}
        );

        score = add(score, KN.info.score);

        KN = [
            {
                score,
                rows: KN.exercise_stages.map(item => item.info),
            },
        ];

        score = add(score, PR.info.score);

        PR = [
            {
                score: score,
                rows: PR.exercise_stages.map(item => item.info),
            },
        ];

        const [stage7, stage8, stage9] = ST.exercise_stages;

        score = add(
            score,
            [stage7, stage8].reduce((summ, item) => {
                return summ + +item.info.total_score;
            }, 0)
        );

        ST = [
            {
                score: score,
                rows: [stage7, stage8].map(item => item.info),
            },
        ];

        if (stage9) {
            stage9.exercise_targets.forEach(target => {
                score = add(score, target.score);

                ST.push({
                    score,
                    rows: [target],
                });
            });
        }

        return {
            athlete: item.athlete,
            info: item.info,
            KN,
            PR,
            ST,
        };
    });
}

/**
 * @returns {[{
 *   athlete: {},
 *   info: {},
 *   groups: [{
 *     title: String,
 *     columns: [{
 *       score: Number,
 *       targts: [{
 *         target: Number,
 *         round: Number
 *       }]
 *     }]
 *   }],
 *   total: Number
 * }]}
 */
function preparePistol25mFinal(results) {
    return results.map(item => {
        const { athlete, info, exercise_groups } = item;
        let score = 0;

        const groups = exercise_groups.map(group => {
            let columns = [];
            columns = group.exercise_stages.map(stage => {
                score = (score * 10 + Number(stage.info.total_score) * 10) / 10;

                return {
                    score,
                    targets: stage.exercise_targets.map(target => {
                        return {
                            score: Number(target.score),
                            round: Number(target.round),
                        };
                    }),
                };
            });

            return {
                title: group.info.exercise_type,
                columns: columns,
            };
        });

        return { athlete, info, groups, score };
    });
}

/**
 * @returns {[{
 *   athlete: {},
 *   info: {},
 *   groups: [{
 *     title: String,
 *     columns: [{
 *       score: Number,
 *       targts: [{
 *         target: Number,
 *         round: Number
 *       }]
 *     }]
 *   }],
 *   total: Number
 * }]}
 */
function prepareShotgunFinal(results) {
    return results.map(item => {
        const { athlete, info, exercise_groups } = item;
        const targets = [];

        exercise_groups.forEach(group => {
            group.exercise_stages.forEach(stage => {
                targets.push(...stage.exercise_targets);
            });
        });

        return { athlete, info, targets };
    });
}

/**
 * @returns {[{
 *   athlete: {},
 *   info: {},
 *   series: [{
 *     stage: String,
 *     score: String
 *   }],
 *   total: Number
 * }]}
 */
function prepareRiflePistolMixed(results) {
    return results.reduce((output, item) => {
        const [ioc_code, number] = item.info.nation.split(' ');
        const team = {
            info: item.info,
            athlete: {
                country: {
                    ioc_code: ioc_code,
                    number,
                },
                info: {
                    first_name: item.info.nation,
                },
            },
            series: {},
            total: item.info.total_competition_score,
        };
        const athletes = item.results.map((item, index, array) => ({
            athlete: {
                country: {},
                info: item.athlete,
            },
            info: item.scores.info,
            series: item.scores.exercise_stages.map(seriesItem => {
                const stage = Number(seriesItem.stage_number);
                const score = Number(seriesItem.total_score);
                team.series[stage] = team.series[stage] || {
                    score: 0,
                    stage: stage,
                };
                team.series[stage].score += score;
                // team.total += score;
                return { stage, score };
            }),
            total: item.scores.info.score,
            lastInTeam: index === array.length - 1,
        }));

        team.series = Object.values(team.series);

        output.push(team, ...athletes);
        return output;
    }, []);
}
