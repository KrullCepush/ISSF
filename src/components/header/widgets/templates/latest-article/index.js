import React, { Fragment, useEffect } from 'react';
import moment from 'moment';
import useStyles from './use-styles';
import { useService } from 'utils/reservices';
import { newsArticle } from 'pages';
import { Link } from 'react-router-dom';

export default function LatestArticle() {
    const NewsService = useService('news');
    const classNames = useStyles();
    const article = NewsService.latestArticle;
    const slug = article.id;

    useEffect(() => {
        NewsService.getLatestArticle();
    }, [0]);

    if (!article.id) {
        return null;
    }

    return (
        <Fragment>
            <Link to={newsArticle.getPath({ slug })}>
                <div className={classNames.publishedAt}>
                    {moment(article.published_at).format('MMMM D, YYYY')}
                </div>
                <div className={classNames.publishedBy}>
                    {article.author_name}
                </div>
                <div className={classNames.title}>{article.title}</div>
            </Link>
        </Fragment>
    );
}
