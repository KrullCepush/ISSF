import * as C from './consts';
import moment from 'moment';
import prepareResults from './prepare-results';

export default function (store) {
    return function (next) {
        return function (action) {
            if (action.types === C.GET_COMPETITIONS) {
                const { filter } = store.getState().competitions;

                action.search = {
                    ...action.search,
                    q: filter
                }
            }

            if (action.type === C.GET_COMPETITION.SUCCESS) {
                action.data.reduced_event_schedules = getReducedEventSchedules(action.data.competition.event_schedules);
                return next(action);
            }

            if (action.type === C.GET_COMPETITION_RESULTS.SUCCESS) {
                const code = `${action.data.event_schedule.event_discipline_category_id}-${action.data.event_schedule.result_phase_type_id}`

                action.data.results = prepareResults(code, action.data.results);
                action.data.code = code;
                return next(action);
            }

            return next(action);
        }
    }
}

function getReducedEventSchedules(event_schedules) {
    let eventSchedules = event_schedules.reduce((result, item) => {
        const gunType = item.gun_type;
        const eventID = item.event_discipline_category_key;

        item.time = [item.start_time, item.end_time].filter(Boolean).map(part => moment(part).format('HH:mm')).join('-')

        if (!result.hasOwnProperty(gunType)) {
            result[gunType] = {
                title: gunType,
                events: {
                    [eventID]: {
                        id: eventID,
                        title: item.discipline_category_title,
                        phases: [item]
                    }
                }
            }
        } else {
            if (result[gunType].events.hasOwnProperty(eventID)) {
                result[gunType].events[eventID].phases.push(item);
            } else {
                result[gunType].events[eventID] = {
                    id: eventID,
                    title: item.discipline_category_title,
                    phases: [item]
                }
            }
        }

        const sortedPhases = result[gunType].events[eventID].phases.sort((a, b)=>{return a.sort_index - b.sort_index})
        result[gunType].events[eventID].phases = sortedPhases

        return result;
    }, {});

    delete eventSchedules.null;

    for (let key in eventSchedules) {
        eventSchedules[key].events = Object.values(eventSchedules[key].events)
    }

    return Object.values(eventSchedules);
}

// function prepareResultsTable1(results) {
//     return results.map(item => ({
//         rank: item.info.rank,
//         bib: item.info.bib_nr,
//         name: `${item.athlete.info.first_name} ${item.athlete.info.last_name}`,
//         country_code: item.athlete.country && item.athlete.country.old_fckn_code,
//         series: item.exercise_groups[item.exercise_groups.length-1].exercise_stages
//             .sort((a, b) => {
//                 if (a.info.stage_number > b.info.stage_number) return 1;
//                 if (a.info.stage_number < b.info.stage_number) return -1;
//                 return 0;
//             })
//             .map(item => item.info.total_score),
//         total: item.exercise_groups[item.exercise_groups.length-1].info.score
//     }))
// }