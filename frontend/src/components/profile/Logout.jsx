import './Profile.css';

const Logout = () => {
  const user = {
    name: 'Olivia Carter',
    email: 'olivia.carter@example.com',
    lastLogin: 'Today, 9:42 AM',
  };

  return (
    <div className="profile-card logout-card">
      <div className="logout-header">
        <div className="logout-avatar">OC</div>
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="logout-info">
        <div className="info-row">
          <span>Last login</span>
          <strong>{user.lastLogin}</strong>
        </div>

        <div className="info-row warning-box">
          <span>Session status</span>
          <strong>Active</strong>
        </div>
      </div>

      <div className="logout-actions">
        <button className="secondary-btn">Stay Signed In</button>
        <button className="logout-btn">Log Out</button>
      </div>
    </div>
  );
};

export default Logout;