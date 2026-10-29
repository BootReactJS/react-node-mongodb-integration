import './Profile.css';

const orders = [
  { id: 'ORD-1042', item: 'Premium Headphones', date: '12 Aug 2026', total: '$249.00', status: 'Delivered' },
  { id: 'ORD-9681', item: 'Smartwatch Pro', date: '28 Jul 2026', total: '$399.00', status: 'Shipped' },
  { id: 'ORD-8215', item: 'Bluetooth Speaker', date: '19 Jul 2026', total: '$129.00', status: 'Processing' },
];

const Orders = () => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <h3>Orders</h3>
        <button className="view-btn">View All</button>
      </div>

      <div className="table-wrap">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Item</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.item}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>
                  <span className={`status status-${order.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;