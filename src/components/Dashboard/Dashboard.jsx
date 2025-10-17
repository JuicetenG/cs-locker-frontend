import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const fetchedUsers = await userService.index();
        setUsers(fetchedUsers);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchUsers();
  }, [user]);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you can see a list of all the users.
      </p>
      <section>
        <h2>All Users</h2>

        {loading ? (
          <p>Loading users...</p>
        ) : users.length > 0 ? (
          <ul>
            {users.map((u) => (
              <li key={u._id}>{u.username}</li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
