import React from "react";
import styled from "styled-components";

const Table = ({ items, className, ...props }) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          <td />
          <td />
          <td />
        </tr>
      </thead>
      <tbody>
        {Object.keys(items).map(function(key, index) {
          return (
            <tr key={items[key].id}>
              <td>
                <img src={items[key].avatar_url} style={{ width: "36px" }} />
              </td>
              <td>
                <a href={items[key].html_url} target="_blank">
                  {items[key].login}
                </a>
              </td>
              <td>
                <a href={items[key].repos_url} target="_blank">
                  Repositories
                </a>
              </td>
              <td>
                <a href={items[key].organizations_url} target="_blank">
                  Organizations
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const TableStyled = styled(Table)`
  margin-top: 10px;
  border-collapse: collapse;
  border-spacing: 0;
  max-width: 100%;
  width: 100%;
  empty-cells: show;
  border: 1px solid rgba(0, 0, 0, 0.05);
  line-height: 24px;
  tr:nth-child(odd) td {
    background: #f8f8f8;
  }
`;

export default TableStyled;
