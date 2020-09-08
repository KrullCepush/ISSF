import React, { useEffect } from 'react';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Button from 'components/button';
import Breadcrumbs from 'components/breadcrumbs';

import { useService } from 'utils/reservices';
import useRansack from 'hooks/use-ransack';
import { news } from 'pages';

import Tools from './components/tools';
import Feed from './components/feed';

export default function NewsList() {
    const NewsService = useService('news');
    const styles = useStyles();
    const ransack = useRansack({
        page: 1,
        q: {}
    });

    useEffect(() => {
        NewsService.getNews(ransack.params);
    }, [ransack.params]);

    function setFilter(form) {
        const q = form;

        if (form.search) {
            q.title_cont = form.search;
        }

        ransack.updateQuery({ q });
    }

    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    <Breadcrumbs items={[{
                        link: news.getPath(),
                        title: 'News'
                    }]} />
                    <Tools onChange={setFilter} />
                    <Feed />
                    <div className={styles.loadMoreContainer}>
                        <Button onClick={ransack.loadMore}>Load more</Button>
                    </div>
                </PageInner>
            </Wrap>
        </Wrap>
    )
}