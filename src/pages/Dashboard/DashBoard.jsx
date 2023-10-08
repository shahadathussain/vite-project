import Card from "../Card";
import Product from "../Product";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="product-list">
        <h2>Products</h2>
        <div className="product-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product) => (
            <Product key={product} />
          ))}
        </div>
      </div>
      <div className="card-list">
        <h2>Cards</h2>
        <div className="card-grid">
          {[1, 2, 3].map((card) => (
            <Card key={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
