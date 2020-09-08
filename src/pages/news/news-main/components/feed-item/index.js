import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import useStyles from './use-styles';
import { newsArticle } from 'pages';


export default function FeedItem(props) {
    if (!props.data) {
        return null;
    }
    const styles = useStyles();
    const {
        id: slug,
        title,
        old_image_name,
        published_at,
        author_name
    } = props.data;

    return (
        <div className={styles.container}>
            <Link to={newsArticle.getPath({ slug })} className={styles.link} />
            <div className={styles.imageContainer}>
                <img src={`https://www.issf-sports.org/media/images/articles/${moment(published_at).format('YYYY')}/${slug}/${old_image_name}`} className={styles.image} alt="" />
            </div>
            <div className={styles.description}>
                <span className={styles.title}>
                    {title}
                </span>
                <div className={styles.published}>
                    {moment(published_at).format('DD.MM.YYYY')}
                    &nbsp;by&nbsp;
                    {author_name}
                </div>
            </div>
        </div>
    )
}