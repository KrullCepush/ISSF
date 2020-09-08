import { useState } from 'react';

export default function useRansack(defaultParams={}) {
    const [ params, setParams ] = useState(defaultParams);

    function updateQuery(params) {
        setParams({
            page: 1,
            per_page: 20,
            ...defaultParams,
            ...params
        });
    }

    function loadMore() {
        updateQuery({
            ...params,
            page: params.page + 1
        });
    }

    function setOrder(order) {
        const { sorts, ...q } = params.q;

        if (order) {
            q.sorts = `${order.field} ${order.dirrection}`;
            updateQuery({ q });
        } else {
            updateQuery({ q });
        }
    }

    return { 
        params,
        loadMore,
        setOrder,
        updateQuery
    }

}