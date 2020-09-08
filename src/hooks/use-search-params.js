import { useLocation } from 'react-router-dom';
import { parse } from 'query-params-helpers';

export default function useSearchParams(defaultParams = {}) {
    const location = useLocation();

    return {
        ...defaultParams,
        ...parse(decodeURIComponent(location.search)),
    };
}
