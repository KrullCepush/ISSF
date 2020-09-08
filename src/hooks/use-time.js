import { useEffect } from 'react';

function useTimeout(func, time) {
    let timeout = null;

    useEffect(() => {
        timeout = setTimeout(func, time);
        return () => clearTimeout(timeout);
    });
}

function useInterval(func, time) {
    let interval = null;

    useEffect(() => {
        interval = setInterval(func, time);
        return () => clearInterval(interval);
    });
}