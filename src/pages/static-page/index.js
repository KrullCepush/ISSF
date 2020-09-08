import React, { useEffect } from 'react';
import Wrap from 'components/wrap';
import Breadcrumbs from 'components/breadcrumbs';
import PageInner from 'components/page-inner';
import { useParams } from 'react-router-dom';
import useStyles from './use-styles';
import { useService } from 'utils/reservices';

StaticPage.defaultProps = {
    breadcrumbs: true
}

export default function StaticPage(props) {
    const PagesService = useService('pages');
    const styles = useStyles();
    const { slug } = useParams();
    const pageID = props.slug || slug;

    const currentPage = PagesService.pages.getValue(pageID).payload.content;
    
    useEffect(() => {
        PagesService.getPage(pageID);
    }, [pageID]);

    const content = <div className={styles.staticContent} style={props.style} dangerouslySetInnerHTML={{__html: currentPage}} />

    if (props.contentOnly) {
        return content
    }

    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    {props.breadcrumbs && (
                        <Breadcrumbs className={styles.breadcrumbs}/>
                    )}
                    {content}
                </PageInner>
            </Wrap>
        </Wrap>
    );
}