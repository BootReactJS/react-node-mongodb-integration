import './Profile.css';

const PersonalDetails = () => {
  const user = {
    name: 'Olivia Carter',
    email: 'olivia.carter@example.com',
    phone: '+1 (415) 305-7821',
    location: 'San Francisco, CA',
    joined: 'March 2023',
  };

  return (
    <div className="profile-card">
      <div className="card-header">
        <h3>Personal Details</h3>
        <button className="edit-btn">Edit</button>
      </div>

      <div className="profile-grid">
        <div className="info-item">
          <span className="label">Full Name</span>
          <strong>{user.name}</strong>
        </div>

        <div className="info-item">
          <span className="label">Email Address</span>
          <strong>{user.email}</strong>
        </div>

        <div className="info-item">
          <span className="label">Phone Number</span>
          <strong>{user.phone}</strong>
        </div>

        <div className="info-item">
          <span className="label">Location</span>
          <strong>{user.location}</strong>
        </div>

        <div className="info-item">
          <span className="label">Member Since</span>
          <strong>{user.joined}</strong>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;