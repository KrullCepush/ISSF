import React from 'react';
import {arrayToTree} from 'query-params-helpers/lib/parse';
/**
 * Форма
 *
 * @constructor
 * @this  {Form}
 * @param {Object} props
 * @param {Function} [props.onChange=(ev, form, json)] - Коллбэк, срабатывающий на событие change
 * @param {Function} [props.onSubmit=(ev, form, json)] - Коллбэк, срабатывающтй на событие submit
 * @param {String} [props.serialize='json'] - Формат сериализации формы (json, array, url, formData)

 * 
 *
 * @example
 * import Form from 'common/components/form/new-form';
 *
 * const onChange = (ev, form, json) => this.setState({form})
 * <Form onChange={onChange}>
 * 
 */

export const FormContext = React.createContext({});
export default class Form extends React.Component {

    static Context = FormContext;
    
    static defaultProps = {
        onChange() {},
        onSubmit() {},
        onReset() {},
        isValid() {
            return true;
        },
        serialize: 'json',
        defaultState: {},
        autoComplete: false,
        onlyWithValue: false
    };

    constructor(props) {
        super(props);
        this.state = props.defaultForm || {};
    }

    componentDidMount(){
        this.setState(this.serializeJSON(this.form))
    }

    submit = () => {
        this.dispatch('submit');
    };

    dispatch = (type) => {
        const event = new Event(type, {
            bubbles: true
        });
        this.form.dispatchEvent(event);
    };

    getCallbackData(ev) {
        const form = ev.currentTarget;

        const state = this.serializeJSON(form);
        const serialized = this.props.serialize === 'json' ? state : this.serializeTo(this.props.serialize, form);

        this.setState(state)

        return { state, serialized };
    }

    onChange = (ev) => {
        if (
            ['textarea', 'text', 'number'].includes(ev.target.type) &&
            ev.type === 'change'
        ) {
            return;
        }
        if (
            ['checkbox', 'radio', 'select-one'].includes(ev.target.type) &&
            ev.type === 'input'
        ) {
            return;
        }
        const { state, serialized } = this.getCallbackData(ev);

        this.props.onChange(ev, serialized, state);
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();

        const { state, serialized } = this.getCallbackData(ev);

        if (!this.props.isValid(ev.currentTarget, state)) {
            return false;
        }

        this.props.onSubmit(ev, serialized, state);
    };

    render() {
        return (
            <FormContext.Provider value={this.state}>
                <form
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onReset={this.props.onReset}
                    onKeyUp={this.props.onKeyUp}
                    onInput={this.onChange}
                    autoComplete={this.props.autoComplete ? 'on' : 'off'}
                    ref={(el) => (this.form = el)}
                    className={this.props.className}
                >
                    {!this.props.autoComplete && (
                        <input
                            autoComplete="false"
                            name="hidden"
                            type="text"
                            style={{display: 'none'}}
                        />
                    )}
                    {this.props.children}
                </form>
            </FormContext.Provider>
            
        );
    }

    serializeTo(format, form) {
        switch (format) {
            case 'array':
                return this.serializeArray(form);
            case 'json':
                return this.serializeJSON(form);
            case 'url':
                return this.serializeURL(form);
            default:
                return new FormData(form);
        }
    }

    serializeArray(form) {
        return [...form.elements]
            .filter((element) => {
                return (
                    (!element.hasOwnProperty('checked') || element.checked) &&
                    element.name &&
                    (this.props.onlyWithValue ? element.value : true)
                );
            })
            .map((element) => {
                const {name, value} = element;
                return {name, value};
            });
    }

    serializeJSON(form) {
        return arrayToTree(this.serializeArray(form));
    }

    serializeURL(form) {
        const array = this.serializeArray(form);

        return array
            .filter((item) => Boolean(item.value))
            .map((item) => `${item.name}=${item.value}`)
            .join('&');
    }
}