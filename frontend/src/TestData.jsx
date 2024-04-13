import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TestData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/test');
      setUsers(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      try
      {users.map((user) => (
        <div key={user.name}>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.isAdmin}</li>
        </div>
      ))}
    </div>
  );
}
