import PropTypes from "prop-types";
import "./ProductCollection.css";

const ProductCollection = ({ product }) => {
  const { name, img, price, ratings } = product;
  return (
    <>
      <div className="card">
        <img src={img} alt="Card Image" />
        <div className="card-content">
          <h2>Name: {name}</h2>
          <p>Price: ${price}</p>
          <p>Ratings: {ratings}</p>
          <p>This is a simple card with some content.</p>
          <a href="#">Add To Cart</a>
        </div>
      </div>
    </>
  );
};

ProductCollection.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCollection;
