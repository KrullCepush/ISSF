import React from 'react';
import useStyles from './use-styles';
import Filter from './filter';
import Ranks from './ranks';

export default function Component() {
    const [ byEvent, setByEvent ] = React.useState(false)
    const styles = useStyles();

    function onChange(ev, data) {
        setByEvent(Boolean(data.category === 'event' && data.event));
    }

    return (
        <div className={styles.container}>
            <Filter onChange={onChange}/>
            <Ranks byEvent={byEvent}/>
        </div>
    )
}