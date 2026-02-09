import React, { useState } from 'react';
import { SingleUserComponent } from './SingleUserComponent';
import userData from './User';

export function AllUsersComponent() {
  const [users, setUsers] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const addAllUsers = () => {
    setUsers(userData);
    setIsAdded(true);
  };

  const deleteAllUsers = () => {
    setUsers([]);
    setIsAdded(false);
  };

  const deleteSingleUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    if (updatedUsers.length === 0) {
      setIsAdded(false); 
    }
  };

  return (
    <div>
      <h2>User Management</h2>

      {!isAdded && (
        <button onClick={addAllUsers}>Add All Users</button>
      )}

      {isAdded && (
        <button onClick={deleteAllUsers}>Delete All Users</button>
      )}

      {users.length > 0 && (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <SingleUserComponent key={user.id} user={user} onDelete={deleteSingleUser} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

