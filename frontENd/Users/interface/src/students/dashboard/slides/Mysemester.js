import React from 'react'
import styled from 'styled-components'
import {useTable} from 'react-table'

import './slides.css'

const TableStyles = styled.div`
  padding: 1rem 2rem;
  border-radius:5px;
  background-color:var(--white);
  color:var(--main-blue);
  table {
    border-spacing: 0;
    border: 1px solid var(--main-blue);

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns,data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,} = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  

const Mysemester = ({reducer}) => {
    const {courses,loggedStudent} = reducer
    const myCourses = courses.filter(c => c.yearDone == loggedStudent.year)
    const columns = 
    [
        {
            Header: 'Course',
            accessor: 'name',
        },
        {
            Header: 'Credit',
            accessor: 'cc',
        },
        {
            Header: 'lecturer',
            accessor: 'lecturer',
        },
        {
            Header: 'CA mark',
            accessor: 'ca',
        },
        {
            Header: 'Exam mark',
            accessor: 'exam',
        },
    ]
    
    return (
        <section className='col mt-3'>
            <TableStyles>
                <Table columns={columns} data={myCourses} />
            </TableStyles>
        </section>
    );
}

export default Mysemester;
