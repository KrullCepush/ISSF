import { useState, useEffect } from 'react';

export default function createUseHTTP() {
    const listeners = [];

    return function useHTTP(options={}) {
        const {
            url='',
            search={},
            body={},
            method='GET',
            defaultState={},
            prepareState=state=>state
        } = options;
    
        function listener(state) {
            setState(state);
        }
    
        function setPending(pending) {
            setState({ ...state, pending })
        }
    
        useEffect(() => {
            listeners.push(listener)
        }, [0]);
    
        const [ state, setState ] = useState({
            pending: false,
            state: defaultState,
            run(){
                useEffect(() => {
                    setPending(true);
                    fetch('http://issf-api.oneclick.life/api/v1/admin/competitions').then(resp => resp.json()).then(data => {
                        const nextState = {
                            ...state, 
                            state: prepareState(data), 
                            pending: false
                        };
    
                        listeners.forEach(func => {
                            func(nextState)
                        })
                    });
                }, [0]);
            }
        });
    
        return state
    }
}