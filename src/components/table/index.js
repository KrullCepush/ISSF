import React, { useState } from 'react';
import useStyles from './use-styles';
import clsx from 'clsx';

TableComponent.defaultProps = {
    showHead: true,
    ordered: false,
    classNames: {
        table: 'table',
        thead: 'thead',
        tbody: 'tbody',
        tr: 'tr',
        td: 'td'
    },
    components: {
        Table: 'table',
        THead: 'thead',
        TBody: 'tbody',
        TR: 'tr',
        TH: 'th',
        TD: 'td'
    },
    getKey: (row) => row.id,
    columns: [],
    data: [],
    onChangeOrder() { }
}

export default function TableComponent(props) {

    const {
        data,
        classNames,
        columns,
        getKey,
        onChangeOrder,
        showHead
    } = props;
    const {
        Table, THead, TBody, TR, TH, TD
    } = props.components;
    const styles = useStyles()
    const [order, setOrder] = useOrder(onChangeOrder);

    function renderTitle(column, styles) {
        if (typeof column.renderTitle === 'function') {
            return column.renderTitle(column, styles)
        } else {
            return column.title || column.name;
        }
    }

    function renderHeaderCol(column) {
        return (
            <TH key={column.name} className={clsx(styles.th, classNames.th, classNames[column.className || column.name], column.orderDisabled && '_disabled')} onClick={() => setOrder(column.name)}>
                {renderTitle(column, classNames)}
                {!column.orderDisabled && (
                    (order && order.field === column.name) ? (
                        <img src={require('./ordered.svg')} className={clsx(styles.icon, order.dirrection === 'desc' && styles.desc, '_ordered')} />
                    ) : (
                            <img src={require('./order.svg')} className={styles.icon} />
                        )
                )}
            </TH>
        )
    }

    function renderCol(rowsIteration, colsIteration) {
        const col = colsIteration.item;
        const row = rowsIteration.item;
        const getClassName = typeof col.getClassName == 'function' ? col.getClassName : () => null
        return (
            <TD key={col.name} className={clsx(classNames.td, classNames[col.name], getClassName(rowsIteration, colsIteration, props))}>
                {typeof col.render === 'function' ? col.render(rowsIteration, colsIteration, props) : row[col.name]}
            </TD>
        )
    }
    function renderRow(row, rowIndex, rows) {
        return (
            <TR key={getKey(row)} className={classNames.tr}>
                {columns.map((col, colIndex, cols) => renderCol(
                    {
                        item: row,
                        index: rowIndex,
                        array: rows
                    },
                    {
                        item: col,
                        index: colIndex,
                        array: cols
                    }
                ))}
            </TR>
        )
    }

    return (
        <Table className={classNames.table}>
            {showHead && (
                <THead className={classNames.thead}>
                    <TR className={classNames.tr}>
                        {columns.map(renderHeaderCol)}
                    </TR>
                </THead>
            )}

            <TBody className={classNames.tbody}>
                {data.map(renderRow)}
            </TBody>
        </Table>
    )
}


function useOrder(onChange = () => { }) {
    const [state, setState] = useState(null);

    function setOrder(name) {
        let nextState = null;

        if (!state || state.field !== name) {
            nextState = {
                field: name,
                dirrection: 'asc'
            };
        } else if (state.dirrection === 'asc') {
            nextState = {
                field: name,
                dirrection: 'desc'
            };
        }

        setState(nextState);
        onChange(nextState);
    }

    return [state, setOrder];

}