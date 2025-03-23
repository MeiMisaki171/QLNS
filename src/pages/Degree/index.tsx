import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from '~/components/Layout/Body/DataTable'

interface User {
  id: number
  fullName: string
  name: string
}

const userData: User[] = [
  { id: 1, fullName: 'THPT', name: 'VCB' },
  { id: 2, fullName: 'Đại học', name: 'TPB' },
  { id: 3, fullName: 'Thạc sĩ', name: 'BIDV' },
  { id: 4, fullName: 'Tiến sĩ', name: '	AGB' },
  { id: 5, fullName: 'Giáo sư', name: '	AGB' },
  { id: 6, fullName: '9/12', name: '	AGB' }
]

const userColumns: ColumnDef<User>[] = [
  { accessorKey: 'id', header: 'STT' },
  { accessorKey: 'fullName', header: 'Trình độ' }
]

const Degree = () => {
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

export default Degree
