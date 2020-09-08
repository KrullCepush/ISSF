import React from 'react';
import Wrap from 'components/wrap';
import PageInner from 'components/page-inner';
import Breadcrumbs from 'components/breadcrumbs';
import Select from 'components/form-inputs/select/stroked';
import './style.css'

import filters from './filters';


function useHtml(...args) {
    const [html, setHtml] = React.useState('')
    React.useEffect(() => {
        const path = 'historical_results/' + args.filter(Boolean).map(item => item.value).join('')
        if (path.match(/html$/)) {
            fetch(process.env.PUBLIC_PATH + path)
                .then(resp => {
                    return resp.text()
                })
                .then(text => {
                    setHtml(text.replace(/\n/g, ' ').replace(/<\s*script.*script\s*>/ig, ''))
                })
        } else {
            setHtml('')
        }
    }, [...args]);
    if (html.length === 0) {
        return null
    }

    return html;
}

export default function HistoricalResults() {

    const [championship, setChampionship] = React.useState(null);
    const [listType, setListType] = React.useState(null);
    const [sublist, setSublist] = React.useState(null);

    const html = useHtml(championship, listType, sublist);



    function onChangeChampionship(_ev, item) {
        setChampionship(item);
        setSublist(null);
        if (championship && item.list_type !== championship.list_type) {
            setListType(null);
        }

    }

    function onChangeListType(_ev, item) {
        setListType(item);
        setSublist(null);
    }

    function onChangeSublist(_ev, item) {
        setSublist(item);
    }

    return (
        <Wrap>
            <Wrap>
                <PageInner>
                    <Breadcrumbs />
                    <div>
                        <Select
                            options={filters}
                            value={championship && championship.value}
                            onChange={onChangeChampionship}
                        />
                        <Select
                            options={championship ? championship.list_type : void 0}
                            value={listType && listType.value}
                            onChange={onChangeListType}
                        />
                        {listType && listType.sub_list && (
                            <Select
                                options={listType.sub_list}
                                onChange={onChangeSublist}
                                value={sublist && sublist.value}
                            />
                        )}

                    </div>
                    <div className='historical' dangerouslySetInnerHTML={{ __html: html }} />
                </PageInner>
            </Wrap>
        </Wrap>
    );
}