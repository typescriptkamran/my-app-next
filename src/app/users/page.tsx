import React from 'react'

interface Users {
  id: number;
  name: string;
  }

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
  {cache: 'no-store' }); // no cache needed
  const users: Users[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p> {new Date().toLocaleDateString()} {new Date().toLocaleTimeString() } </p>
      <table>
       
        {users.map(user => <li key={user.id}> {user.name} </li>)
       
        
      }
      </table>

    </>
  )
}

export default UsersPage