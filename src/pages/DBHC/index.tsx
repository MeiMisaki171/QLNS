import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from '~/components/Layout/Body/DataTable'

interface User {
  id: number
  maDBHC: string
  tenDBHC?: string
  maCha?: string
}

const userData: User[] = [
  { id: 1, maDBHC: '1TTT', tenDBHC: 'Hà Nội' },
  { id: 2, maDBHC: '2TTT', tenDBHC: 'Hải Phòng' },
  { id: 3, maDBHC: '3TTT', tenDBHC: 'Nam Định' },
  { id: 4, maDBHC: '4TTT', tenDBHC: 'Quảng ninh' }
]

const userColumns: ColumnDef<User>[] = [
  { accessorKey: 'id', header: 'STT' },
  { accessorKey: 'maDBHC', header: 'Mã ĐBHC' },
  { accessorKey: 'tenDBHC', header: 'Tên ĐBHC' }
]

const DBHC = () => {
  const [data, setData] = useState<User[]>(userData)
  // Xử lý sửa dữ liệu
  const handleEdit = (row: User) => {
    // const newName = prompt('Nhập tên mới:', row.name)
    // if (newName) {
    //   setData((prev) => prev.map((item) => (item.id === row.id ? { ...item, name: newName } : item)))
    // }
  }

  // Xử lý xóa dữ liệu
  const handleDelete = (row: User) => {
    // if (window.confirm(`Bạn có chắc muốn xóa ${row.name}?`)) {
    //   setData((prev) => prev.filter((item) => item.id !== row.id))
    // }
  }
  return (
    <div className='w-full mx-auto'>
      <DataTable data={userData} columns={userColumns} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default DBHC
