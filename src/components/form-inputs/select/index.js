import React from 'react';
import clsx from 'clsx';
import useStyles from './use-styles';

let counter = 0

export default function Select(props) {
    const [id] = React.useState('select-' + ++counter);
    const styles = useStyles();
    const selected = props.options.find(item => {
        return (String(props.getValue(item)) === String(props.value))
    });

    function onChange(ev) {
        return props.onChange(ev, props.options.find(item => (props.getValue(item) == ev.target.value)))
    }

    return (
        <div className={clsx(styles.select, props.className, !selected && '_placeholder', props.disabled && '_disabled', props.value && '_selected')}>
            <label
                htmlFor={id}
                className={clsx(styles.label, props.labelClassName, !selected && '_placeholder')}
            >
                {selected ? props.getTitle(selected) : props.placeholder}
                {props.children}
            </label>
            <select
                id={id}
                disabled={props.disabled}
                className={styles.nativeSelect}
                onChange={onChange}
                name={props.name}
                value={props.value}
            >
                {props.notSelectDisable === true ? "" : <option value="">Not selected</option>}
                {props.options.map(item => (
                    <option key={props.getKey(item)} value={props.getValue(item)}>{props.getTitle(item)}</option>
                ))}
            </select>
        </div>
    )
}

Select.defaultProps = {
    placeholder: 'Not selected',
    onChange() {
    },
    options: [],
    notSelectDisable: false,
    getTitle(item) {
        return item.title || this.getValue(item)
    },
    getValue(item) {
        return item.value
    },
    getKey(item) {
        return item.value
    }
}