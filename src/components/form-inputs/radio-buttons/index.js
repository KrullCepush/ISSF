import React from 'react';
import useStyles from './use-styles';
import clsx from 'clsx';

export default function RadioButtons(props) {
    const styles = useStyles();

    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;

    return (
        <div className={styles.container}>
            {props.items.map(item => {
                const itemValue = props.getValue(item);
                const title = props.getTitle(item);
                const key = props.getKey(item);
                const checked = itemValue === value;

                return (
                    <label key={key} className={clsx(checked && '_checked')}>
                        {title}
                        <input type="radio" name={props.name} value={itemValue} checked={checked} onChange={props.onChange}/>
                    </label>
                )
            })}
        </div>
    )
}

RadioButtons.defaultProps = {
    onChange(){},
    items: [],
    getTitle(item){
        return item.title || this.getValue(item)
    },
    getValue(item){
        return item.value
    },
    getKey(item){
        return item.value
    }
}