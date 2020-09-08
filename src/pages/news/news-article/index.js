import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Breadcrumbs from 'components/breadcrumbs';

import { useService } from 'utils/reservices';

import { news } from 'pages';

import useStyles from './use-styles';
import ArticleBody from './components/article-body';

export default function Article() {
    const NewsService = useService('news');
    const styles = useStyles();
    let { slug } = useParams();

    useEffect(() => {
        NewsService.getNewsArticle(slug);
    }, [slug]);

    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    <Breadcrumbs
                        items={[
                            {
                                link: news.getPath(),
                                title: 'News',
                            },
                        ]}
                    />
                    <ArticleBody slug={slug} />
                    <div className={styles.btnBottom}>
                        <iframe
                            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.issf-sports.org%2Fnews.ashx%3Fnewsid%3D3391&width=107&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId=409841069952998"
                            width="107"
                            height="21"
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            allow="encrypted-media"
                        />
                    </div>
                    <div className={styles.tagBottom}>
                        <div className={styles.listTagBottom}>
                            {['Heather Dewar', 'BBC Scotland'].map(el => (
                                <span className={styles.itemTagBottom}>
                                    {el}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* <div className={styles.additionally}>
                        <h2 className={styles.titleAdditionally}>RELATED NEWS</h2>

                        <div className={styles.cards}>

                            <div className={styles.card}>
                                <img className={styles.imgCard} src='https://itcrumbs.ru/wp-content/uploads/2018/06/putin-o-revolyutsii.jpg' />
                                <div className={styles.infoCard}>
                                    <div className={styles.titleCard}>Shooting: Commonwealth Games exclusion could be 'good' for Scotland, says Seonaid McIntosh</div>

                                </div>
                            </div>
                        </div>
                    </div> */}
                </PageInner>
            </Wrap>
        </Wrap>
    );
}
