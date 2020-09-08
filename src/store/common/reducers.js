import * as C from './consts';
import { boundApiReducer as api, boundReducer } from 'redux-upgrader';

class Meta {
    event_discipline_categories = []
    world_rank_discipline_categories = []
    world_rank_discipline_categories_select_options = []
}

export const metaInfo = api(C.GET_META, Meta);

export const competitionTypeCategories = boundReducer({}, {
    [C.GET_META.SUCCESS]: (_state, action) => {
        return action.data.competition_type_categories.reduce(reduceBy('id'), {});
    }
});

export const competitionTypesByCode = boundReducer({}, {
    [C.GET_META.SUCCESS]: (_state, action) => {
        return action.data.competition_types.reduce(reduceBy('code'), {});
    }
});

export const countriesByID = boundReducer({}, {
    [C.GET_META.SUCCESS]: (_state, action) => {
        return action.data.countries.reduce(reduceBy('id'), {});
    }
});

export const eventDisciplineСategoriesByID = boundReducer({}, {
    [C.GET_META.SUCCESS]: (_state, action) => {
        return action.data.event_discipline_categories.reduce(reduceBy('id'), {});
    }
});

export const eventDisciplineСategoriesByCode = boundReducer({}, {
    [C.GET_META.SUCCESS]: (_state, action) => {
        return action.data.event_discipline_categories.reduce(reduceBy('code'), {});
    }
});

function reduceBy(field) {
    return function (result, item) {
        return {
            ...result,
            [item[field]]: item
        }
    }
}
