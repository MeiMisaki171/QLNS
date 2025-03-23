import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from '~/components/Layout/Body/DataTable'

interface User {
  id: number
  fullName: string
  code: string
  status: string
  birth: string
  sex: string
  ethnicity: string
  sdt: string
  email: string
  date: string
  degree: string
  major?: string
}

const userData: User[] = [
  {
    id: 1,
    fullName: 'Vietcombank',
    code: 'AAAA',
    status: 'Đang làm',
    birth: '20/11/1995',
    sex: 'Nam',
    ethnicity: 'Thái',
    sdt: '0121354458',
    email: 'nguyenvana@email.com',
    date: '01-01-2025',
    degree: 'THPT',
    major: 'CNTT'
  },
  {
    id: 2,
    fullName: 'TPBank',
    code: 'BBBB',
    status: 'Tạm dừng',
    birth: '12/1/1994',
    sex: 'Nam',
    ethnicity: 'Tày',
    sdt: '0121354458',
    email: 'nguyenvana@email.com',
    date: '01-01-2025',
    degree: 'THPT',
    major: 'CNTT'
  },
  {
    id: 3,
    fullName: 'BIDV',
    code: 'CCCC',
    status: 'Nghỉ việc',
    birth: '20/5/1998',
    sex: 'Nữ',
    ethnicity: 'Kinh',
    sdt: '0121354458',
    email: 'nguyenvana@email.com',
    date: '01-01-2025',
    degree: 'THPT',
    major: 'CNTT'
  },
  {
    id: 4,
    fullName: 'Agribank',
    code: 'DDDD',
    status: 'Đang làm',
    birth: '2/11/19956',
    sex: 'Nữ',
    ethnicity: 'Kinh',
    sdt: '0121354458',
    email: 'nguyenvana@email.com',
    date: '01-01-2025',
    degree: 'THPT',
    major: 'CNTT'
  }
]

const userColumns: ColumnDef<User>[] = [
  { accessorKey: 'id', header: 'STT' },
  { accessorKey: 'fullName', header: 'Họ tên' },
  { accessorKey: 'code', header: 'Mã code' },
  { accessorKey: 'status', header: 'Trạng thái' },
  { accessorKey: 'birth', header: 'Ngày sinh' },
  { accessorKey: 'sex', header: 'Giới tính' },
  { accessorKey: 'ethnicity', header: 'Dân tộc' },
  { accessorKey: 'sdt', header: 'SĐT' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'date', header: 'Ngày vào' },
  { accessorKey: 'degree', header: 'Trình độ học vấn' },
  { accessorKey: 'major', header: 'Chuyên ngành' }
]

const Personnel = () => {
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

export default Personnel
