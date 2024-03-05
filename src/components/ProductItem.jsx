import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import PropTypes from "prop-types";

const ProductItem = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <div className="border rounded-lg p-4 m-2 shadow-lg">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={product.image}
        alt=""
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-500 mb-2">{product.price} TL</p>
        <button
          className={` bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full ${
            findProduct && "opacity-50 cursor-no-drop"
          }`}
          onClick={() => addToCart(product)}
          disabled={findProduct}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
