

import React from "react";
import { useTable } from "react-table";

export default function Table({  data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const columns = React.useMemo(
    () => [
      {
        Header: 'Store',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Total Products',
        accessor: 'nProducts',
      },
      {
        Header: 'Average Price',
        accessor: 'avg',
      }
    ],
    []
  )

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data
  });


  return (
    <div style={{marginLeft:30}}>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}
              
              style={{
              //  padding: '10px',
                border: 'solid 1px gray',
                background: 'white',
                color: 'black',
              }}
              >{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}
                
                style={{
                    padding: '10px',
                    border: 'solid 1px gray',
                    background: 'white',
                    color: 'black',
                  }}
                >{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}