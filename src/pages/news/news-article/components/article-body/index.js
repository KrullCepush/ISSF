import React from 'react';
import moment from 'moment';
import useStyles from './use-styles';
import PageHeader from 'components/page-header';
import { useService } from 'utils/reservices';


export default function ArticleBody() {
    const NewsService = useService('news');
    const styles = useStyles();

    const { payload:article } = NewsService.article;

    const {
        id,
        title='',
        headline='',
        published_at,
        old_image_name,
        blocks=[]
    } = article;
    
    const date = moment(published_at);

    let createMarkup = (html) => {
        return {__html: html};
    };
    return (
        <div className={styles.container}>
            <PageHeader title={date.format('MMMM DD, YYYY')}/>
            <h2 className={styles.title}>
                {title}
            </h2>
            <article>
                <img src={`https://www.issf-sports.org/media/images/articles/${date.format('YYYY')}/${id}/${old_image_name}`} className={styles.image} alt=""/>
                <div className={styles.subtitle}>
                    {headline}
                </div>
                    {blocks.map((block) => (
                        <div dangerouslySetInnerHTML={createMarkup(block.content)}/>
                    ))}
            </article>
        </div>
    )
}