import React from 'react';
import useStyles from './use-styles';
import { useService } from 'utils/reservices';

import FeedItem from '../feed-item';


export default function Feed() {
    const NewsService = useService('news');
    const styles = useStyles();

    return (
        <div className={styles.feed}>
            {NewsService.feed.payload.map(item => (
                <FeedItem key={item.id} data={item} />
            ))}
        </div>
    )
}