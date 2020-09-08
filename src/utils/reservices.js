/* eslint-disable react-hooks/rules-of-hooks */
import {combineReducers, bindActionCreators} from 'redux';
import {connect, useSelector, useDispatch} from 'react-redux';


let actions = {};

export const reducers = {}

export let combinedReducers = {};

export const middlewares = [];

function mapStateServiceToProps(names, state) {
    return names.reduce((result, name) => {
        return {
            ...result,
            [name]: state[name]
        }
    }, {})
};

function mapDispatchServiceToProps(names, dispatch) {
    const props = {
        actions: {}
    };
    
    props.actions = names.reduce((result, name) => {
        return {
            ...result,
            [name]: bindActionCreators(actions[name], dispatch)
        }
    }, {})

    return props;
};

export function withServices(services=[], mapStateToProps=()=>({}), mapDispatchToProps=()=>({}), ...args) {
    return connect(
        state => {
            return {
                ...mapStateToProps(state),
                ...mapStateServiceToProps(services, state)
            }
        },
        dispatch => {
            return {
                ...mapDispatchToProps(dispatch),
                ...mapDispatchServiceToProps(services, dispatch)
            }
        },
        ...args
    )
}

export function defineService(name, options={}) {
    if (!name) throw new Error('"name" is required parameter');

    if (options.actions) {
        actions[name] = options.actions;
    }
    if (options.reducers) {
        reducers[name] = combineReducers(options.reducers);
        combinedReducers = combineReducers(reducers);
    }
    if (options.middleware) {
        middlewares.push(options.middleware);
    }
}

export function useService(name) {
    const dispatch = useDispatch();
    const state = useSelector(state => (state[name] || {}));

    return new Proxy(state, {
        get(target, key) {
            if (target.hasOwnProperty(key)) {
                return target[key];
            } else if(actions[name].hasOwnProperty(key)){
                const actionCreator = actions[name][key] || function() {
                    return {
                        type: 'UNDEFINED_ACION'
                    }
                }
                return (...args) => dispatch(actionCreator(...args));
            }
        }
    })
}

export default withServices;