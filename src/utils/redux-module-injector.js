import {combineReducers, bindActionCreators} from 'redux';
import {connect, useSelector, useDispatch} from 'react-redux';


let actions = {};

export const reducers = {}

export let combinedReducers = {};

export const middlewares = [];

export const hooks = {};

function mapStateModuleToProps(names, state) {
    return names.reduce((result, name) => {
        return {
            ...result,
            [name]: state[name]
        }
    }, {})
};

function mapDispatchModuleToProps(names, dispatch) {
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

export function injectModules(modules=[], mapStateToProps=()=>({}), mapDispatchToProps=()=>({}), ...args) {
    return connect(
        state => {
            return {
                ...mapStateToProps(state),
                ...mapStateModuleToProps(modules, state)
            }
        },
        dispatch => {
            return {
                ...mapDispatchToProps(dispatch),
                ...mapDispatchModuleToProps(modules, dispatch)
            }
        },
        ...args
    )
}

export function defineModule(name, options={}) {
    if (!name) throw new Error('"name" is required parameter');
    const hookName = `use${name.replace(/^\w/, (s => s.toUpperCase()))}`;
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

    function stateHook() {
        const state = useSelector(state => state[name])
        return state
    }

    function actionHook(actionName) {
        const dispatch = useDispatch();
        return (...args) => dispatch(actions[name][actionName](...args));
    }

    function hookFunction() {
        const dispatch = useDispatch();
        const state = useSelector(state => state[name])
        return {
            state,
            actions: Object.keys(actions[name]).reduce((result, key) => {
                return {
                    ...result,
                    [key]: (...args) => dispatch(actions[name][key](...args))
                }
            }, {})
        }
    }

    stateHook.displayName = `${hookName}State`;
    actionHook.displayName = `${hookName}Action`;
    hookFunction.displayName = hookName;

    hooks[stateHook.displayName] = stateHook;
    hooks[actionHook.displayName] = actionHook;
    hooks[hookFunction.displayName] = hookFunction;
}

export function Type(description={}, config={}) {
    const {
        prepare = {}
    } = config;
    return class extends description.constructor {
        constructor(input, ...args) {
            super(...args);

            Object.keys(description).forEach(_key => {
                const key = _key.replace(/^\$/, '');
                const optional = !!_key.match(/^\$/);
                const FieldModel = description[_key];
                
                if (description instanceof Array) {
                    if (description.length && input instanceof Array) {
                        const ItemModel = description[0];

                        input.forEach(item => {
                            this.push(new ItemModel(item))
                        });
                    }
                } else {
                    if (!input || !input.hasOwnProperty(key) || input[key] === undefined || input[key] === null) {
                        if (!optional) {
                            this[key] = new FieldModel().valueOf();
                        }
                    } else {
                        if (prepare.hasOwnProperty(key)) {
                            this[key] = new FieldModel(prepare[key](input[key], input, key)).valueOf();
                        } else {
                            this[key] = new FieldModel(input[key]).valueOf();
                        }
                        
                    }
                }
                
            });
        }
    }
}

export default injectModules;