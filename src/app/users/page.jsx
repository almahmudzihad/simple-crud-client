import React from 'react'
import { getUsers } from '../lib/data'
import UserTable from '@/componets/UserTable';
import { createUser, deleteUser } from '../lib/action';
import AddUserModal from '@/componets/AddUserModal';

const UserPage = async() => {
    const users = await getUsers();
  return (
    <div className='max-w-6xl mx-auto'>
        <h1 className='text-2xl font-bold text-center my-5'>Users Management System</h1>
        <div className='flex justify-between items-center my-2'>
          <p>Total user {users.length}</p>
            <AddUserModal createUserAction={createUser} />
        </div>
        
        <UserTable users={users} deleteUserAction={deleteUser} />

        
    </div>
  )
}

export default UserPage