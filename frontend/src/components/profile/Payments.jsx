import './Profile.css';

const payments = [
  { method: 'Visa •••• 2458', lastUsed: '02 Sep 2026', type: 'Primary', status: 'Active' },
  { method: 'MasterCard •••• 9041', lastUsed: '18 Aug 2026', type: 'Secondary', status: 'Active' },
  { method: 'PayPal', lastUsed: '12 Jul 2026', type: 'Wallet', status: 'Inactive' },
];

const Payments = () => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <h3>Payments</h3>
        <button className="add-btn">Add Card</button>
      </div>

      <div className="payment-list">
        {payments.map((payment, index) => (
          <div className="payment-item" key={index}>
            <div className="payment-icon">
              {payment.method.includes('PayPal') ? 'P' : '💳'}
            </div>

            <div className="payment-details">
              <strong>{payment.method}</strong>
              <span>Last used: {payment.lastUsed}</span>
            </div>

            <div className="payment-meta">
              <span className="tag">{payment.type}</span>
              <span className={`status status-${payment.status.toLowerCase()}`}>
                {payment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;