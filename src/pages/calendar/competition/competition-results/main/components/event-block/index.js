import React, { Fragment } from "react";
import moment from "moment";
import useStyles, { useTableStyles } from "./use-styles";
import Table from "components/table";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { competitionResultsVariant1 } from "pages";

const columns = [
  {
    name: "name",
    render: (row, col, props) => (
      <Fragment>
        {row.item.result_exists ? (
          <Link
            to={
              competitionResultsVariant1.getPath({
                id: row.item.competition_id,
                eventId: row.item.id
              }) +
              "/" +
              [row.item.event_discipline_category_id, row.item.result_phase_type_id].join("-")
            }
            className={props.classNames.nameLink}
          >
            {row.item.phase_title} {row.item.extension_title}
          </Link>
        ) : (
          <span className={props.classNames.nameLink}>
            {row.item.phase_title} {row.item.extension_title}
          </span>
        )}

        <div className={props.classNames.rowHelper}>
          {moment(row.item.date).format("MMM D, dddd")} {row.item.time}
        </div>
      </Fragment>
    )
  },
  {
    name: "date",
    render: row => moment(row.item.date).format("MMM D, dddd")
  },
  {
    name: "time",
    render: row => row.item.time
  }
  //   {
  //     name: "link",
  //     render: (row, col, props) => (
  //       <Link to="/" className={clsx(props.classNames.seeResults, !row.item.result_exists && "_disabled")}>
  //         see results
  //       </Link>
  //     )
  //   },
  //   {
  //     name: "file",
  //     render: (row, col, props) => (
  //       <Link to="/" className={clsx(props.classNames.fileLink, !row.item.result_exists && "_disabled")}>
  //         <img src={require("./pdf-icon.svg")} alt="" />
  //       </Link>
  //     )
  //   }
];

const tableComponents = {
  Table: "div",
  THead: "div",
  TBody: "div",
  TH: "div",
  TR: "div",
  TD: "div"
};

export default function EventBlock({ title, data }) {
  const styles = useStyles();
  const tableStyles = useTableStyles();
  const rawData = data || []
  const isGunTypeShothun = rawData.map(row => row.gun_type).includes('shotgun')
  const filteredData = isGunTypeShothun ? rawData.filter(row => row.extension_title !== 'Day 2') : rawData

  return (
    <div className={styles.event}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.bracket} />
      <div className={styles.content}>
        <Table
          showHead={false}
          columns={columns}
          data={filteredData}
          classNames={tableStyles}
          components={tableComponents}
          colProps={{ title }}
        />
      </div>
    </div>
  );
}
