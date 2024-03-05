import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) return;
  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {cart.map((item, i) => (
          <li className="flex justify-between mt-2" key={i}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl"> Toplam {total}TL</p>
      <button
        className="bg-red-500 text-white border p-1 rounded py-2 w-full hover:bg-red-600 transition-all mt-4"
        onClick={emptyCart}
      >
        Sepeti boşalt
      </button>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  emptyCart: PropTypes.func,
};
export default Cart;
