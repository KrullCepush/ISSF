import React, { useEffect } from 'react';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Button from 'components/button';

import { useService } from 'utils/reservices';
import useRansack from 'hooks/use-ransack';

import Feed from '../../../news/news-main/components/feed';

import {useParams} from "react-router-dom";

export default function NewsList() {
    const NewsService = useService('news');
    const styles = useStyles();
    let { id } = useParams();
    const ransack = useRansack({
        page: 1,
        q: { competition_id_eq: id }
    });

    useEffect(() => {
        NewsService.getNews(ransack.params);
    }, [ransack.params]);


    return (
        <Wrap>
            <Wrap>
                <PageInner style={{paddingBottom: '10rem'}}>
                    <Feed />
                    {NewsService.feed.payload.count > 20 && (
                        <div className={styles.loadMoreContainer}>
                            <Button onClick={ransack.loadMore}>Load more</Button>
                        </div>
                    )}
                </PageInner>
            </Wrap>
        </Wrap>
    )
}