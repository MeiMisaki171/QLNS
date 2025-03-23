import React, { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef
} from '@tanstack/react-table'
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight, FaPen, FaPlus } from 'react-icons/fa6'
import { FaFileImport, FaTrashAlt } from 'react-icons/fa'

interface TableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  onEdit: (row: T) => void
  onDelete: (row: T) => void
}

const DataTable = <T,>({ data, columns, onEdit, onDelete }: TableProps<T>) => {
  const [searchText, setSearchText] = useState('')
  const [pageSize, setPageSize] = useState(5)
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter: searchText,
      pagination
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setSearchText
  })

  return (
    <div className='w-full p-4'>
      {/* Thanh công cụ */}
      <div className='flex justify-between items-center mb-4'>
        <div className='flex space-x-2'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center cursor-pointer'>
            <FaPlus />
            Thêm mới
          </button>
          <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600  flex items-center cursor-pointer'>
            <FaFileImport className='me-1' />
            Import
          </button>
        </div>
        <input
          type='text'
          placeholder='Tìm kiếm...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className='border border-gray-300 p-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-600'
        />
      </div>

      {/* Bảng dữ liệu */}
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-200'>
          <thead className='bg-gray-100'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className='border-b border-gray-200'>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className='p-4 text-left border-b border-gray-200'>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
                <th className='p-4 text-center border-b border-gray-200 w-32'>Thao tác</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className='border-b border-gray-200'>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className='px-4 py-3 border-b border-gray-200'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                  <td className='px-2 py-3 border-b border-gray-200 text-center'>
                    <button
                      onClick={() => onEdit(row.original)}
                      className='px-2 py-1 w-8 h-8 rounded-full border-1 mr-2 text-blue-500 cursor-pointer'
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={() => onDelete(row.original)}
                      className='px-2 py-1 w-8 h-8 rounded-full border-1 text-red-500 cursor-pointer'
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className='text-center p-4'>
                  Không tìm thấy dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex justify-between items-center mt-4'>
        {/* Số hàng hiển thị */}
        <div>
          <label className='mr-2 text-sm font-medium'>Số hàng/trang:</label>
          <select
            value={pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value)
              setPageSize(newSize)
              setPagination({ pageIndex: 0, pageSize: newSize })
            }}
            className='border p-1 rounded'
          >
            {[5, 10, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Điều hướng phân trang */}
        <div className='flex items-center space-x-2 text-2xl'>
          <button
            onClick={() => setPagination((prev) => ({ ...prev, pageIndex: 0 }))}
            disabled={pagination.pageIndex === 0}
            className='p-2 disabled:opacity-50'
          >
            <FaAnglesLeft />
          </button>

          <button
            onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex - 1 }))}
            disabled={pagination.pageIndex === 0}
            className='p-2 disabled:opacity-50'
          >
            <FaAngleLeft />
          </button>

          <span className='text-sm font-medium'>
            Trang {pagination.pageIndex + 1} / {table.getPageCount()}
          </span>

          <button
            onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }))}
            disabled={pagination.pageIndex >= table.getPageCount() - 1}
            className='p-2 disabled:opacity-50'
          >
            <FaAngleRight />
          </button>

          <button
            onClick={() => setPagination((prev) => ({ ...prev, pageIndex: table.getPageCount() - 1 }))}
            disabled={pagination.pageIndex >= table.getPageCount() - 1}
            className='p-2 disabled:opacity-50'
          >
            <FaAnglesRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataTable
