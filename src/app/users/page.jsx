import React from 'react'
import { getUsers } from '../lib/data'
import UserTable from '@/componets/UserTable';

const UserPage = async() => {
    const users = await getUsers();
  return (
    <div className='max-w-6xl mx-auto'>
        <h1 className='text-2xl font-bold text-center mt-5'>Users Management </h1>
        <UserTable users={users} />
    </div>
  )
}

export default UserPage