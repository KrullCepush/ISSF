import React from 'react';
import Flag from 'components/flag';
import { Link } from 'react-router-dom';
import { Row, Col } from '../../grid';
import {
    useRowStyles,
    useStylesSeries,
    useRemarksColStyles,
    useTotalColStyles,
    useTargetsColStyles,
} from './styles';
import inner_count from "../helpers"

import { useService } from 'utils/reservices';

import { athletePage } from 'pages';

export default function RiflePistolBase({ data, ...props }) {
    const CommonService = useService('common');
    const [countryName, setCountryName] = React.useState('');
    const row = useRowStyles();
    const series = useStylesSeries();
    const remarksStyles = useRemarksColStyles();
    const totalStyles = useTotalColStyles();
    const targetsStyles = useTargetsColStyles();

    const name =
        countryName ||
        [data.athlete.info.last_name, data.athlete.info.first_name]
            .filter(Boolean)
            .join(' ');

    const { countries = [] } = CommonService.metaInfo.payload;

    React.useEffect(() => {
        if (countries) {
            const [nation, number] = (data.info.nation || '').split(' ');
            const country =
                countries.find(country => country.ioc_code === nation) || {};

            if (country) {
                setCountryName(
                    [country.name, number].filter(Boolean).join(' ')
                );
            }
        }
    }, [data.info.nation, countries]);

    return (
        <Row className={row.row} lastInTeam={data.lastInTeam}>
            <Col
                area="rank"
                title="Rank"
                bodyClassName={row.grayColumnsBody}
                showTitle={props.index === 0}
            >
                {data.info.rank}
            </Col>
            <Col
                area="bib"
                title="bib#"
                bodyClassName={row.grayColumnsBody}
                showTitle={props.index === 0}
            >
                {data.info.bib_nr}
            </Col>
            <Col
                area="avatar"
                bodyClassName={row.grayColumnsBody}
                showTitle={props.index === 0}
            >
                {data.athlete.info.external_id && (
                    <div
                        className={row.avatar}
                        style={{
                            backgroundImage: `url(https://result.issf-sports.info/get_image.php?issfid=${data.athlete.info.external_id}&width=32)`,
                        }}
                    />
                )}
            </Col>
            <Col
                area="name"
                title="name"
                bodyClassName={row.grayColumnsBody}
                showTitle={props.index === 0}
            >
                {data.athlete.info.id ? (
                    <Link
                        to={athletePage.getPath({ id: data.athlete.info.id })}
                    >
                        {name}
                    </Link>
                ) : (
                        name
                    )}
            </Col>
            <Col
                area="nat"
                title="nat"
                bodyClassName={row.grayColumnsBody}
                showTitle={props.index === 0}
            >
                <Flag code={data.athlete.country.ioc_code} width={32} />
            </Col>
            <Col
                area="series"
                title="series"
                alignItems="center"
                className={series.col}
                showTitle={props.index === 0}
            >
                <div className={series.wrap}>
                    {data.series.map(item => (
                        <div key={item.stage} className={series.item}>
                            {item.score}
                        </div>
                    ))}
                </div>
            </Col>
            <Col
                area="total"
                title="total"
                styles={totalStyles}
                showTitle={props.index === 0}
            >
                {data.total}{inner_count(data.info.inner_count)}
            </Col>
            <Col
                area="remarks"
                title="remarks"
                styles={remarksStyles}
                showTitle={props.index === 0}
            >
                {data.info.remarks}
            </Col>
            <Col
                area="targets"
                title="targets"
                styles={targetsStyles}
                bodyClassName={row.grayColumnsBody}
                showTitle={props.index === 0}
            >
                <img src={require('assets/icons/targets.svg')} />
            </Col>
        </Row>
    );
}
