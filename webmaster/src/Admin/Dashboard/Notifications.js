import  { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await axios.get('/notifications');
      setNotifications(response.data);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            {notification.message} - {new Date(notification.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
