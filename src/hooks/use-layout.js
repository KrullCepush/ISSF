import { useState, useEffect } from 'react';
import useSearchParams from './use-search-params';

export default function useLayout() {
    const [showLayout, setShowLayout] = useState(true);
    const params = useSearchParams({
        layout: true,
    });

    useEffect(() => {
        setShowLayout(params.layout);
    }, []);

    return showLayout;
}
