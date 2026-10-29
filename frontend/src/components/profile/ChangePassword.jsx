import './Profile.css';

const ChangePassword = () => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <h3>Change Password</h3>
      </div>

      <form className="password-form">
        <div className="field-group">
          <label>Current Password</label>
          <input type="password" value="********" readOnly />
        </div>

        <div className="field-group">
          <label>New Password</label>
          <input type="password" placeholder="Enter new password" />
        </div>

        <div className="field-group">
          <label>Confirm New Password</label>
          <input type="password" placeholder="Confirm new password" />
        </div>

        <button type="button" className="save-btn">Update Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;