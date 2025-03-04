import React from "react";
import { Table } from "antd";
import { createStyles } from "antd-style";

const MainTable = ({
  tableData,
  pagination,
  textColor,
  ClassCss,
  ClassCss1,
}) => {
  const useStyle = createStyles(({ css, token }) => {
    const { antCls } = token;
    return {
      customTable: css`
        ${antCls}-table {
          ${antCls}-table-container {
            ${antCls}-table-body,
            ${antCls}-table-content {
              scrollbar-width: thin;
              scrollbar-color: #eaeaea transparent;
              scrollbar-gutter: stable;
            }
          }
        }

        /* Custom Table Header */
        .ant-table-thead > tr > th {
          background-color: #272ad9;
          color: white;
          font-weight: 400;
          background-color: #272ad9 !important;
          border: none !important;
          ${ClassCss1};
        }

        .ant-table {
          font-family: poppins !important;
          letter-spacing: 0.2px;
        }

        .ant-table-thead > tr > th {
          text-align: center !important;
          border-radius: 0px !important;
        }

        .ant-table-tbody > tr {
          text-align: center !important;
          color: ${textColor ? textColor : "#5455B6"};
          ${ClassCss};
          font-weight: 500;
        }

        .ant-table-thead > tr > th::before {
          display: none !important;
        }
      `,
    };
  });
  const { styles } = useStyle();
  if (!tableData || Object.keys(tableData).length === 0) return null;

  // Define table columns
  const columns = [
    {
      title: tableData.title,
      dataIndex: tableData.dataIndex,
      key: tableData.dataIndex,
      fixed: "left",
      width: 140,
    },
    ...tableData.header.map((col) => ({
      title: col.title,
      dataIndex: col.dataIndex,
      key: col.dataIndex,
    })),
  ];

  // Define table data source
  const dataSource =
    !tableData || tableData.rows.length === 0
      ? [] // Ensure it's an empty array if no data exists
      : tableData.rows.map((row, index) => ({
          key: `row-${index}`, // ✅ Unique key assigned properly
          date: row.date,
          ...row,
        }));

  return (
    <Table
      className={`${styles.customTable} shadow-xl`}
      pagination={pagination}
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: "max-content" }}
    />
  );
};

export default MainTable;
