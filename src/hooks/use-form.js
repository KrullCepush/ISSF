import { useState } from 'react';

export default function useForm(defaultState) {
    const [ state, setState ] = useState(defaultState);

    function onChange(_ev, _data, form) {
        setState({
            ...defaultState,
            ...form
        });
    }

    return [state, onChange]
}