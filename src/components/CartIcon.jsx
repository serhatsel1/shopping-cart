import { MdOutlineShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="relative">
      <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
      {cart.length > 0 && (
        <span className="bg-red-500 text-white rounded-full  w-5 h-5 flex justify-center items-center absolute -top-2 -right-2 text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

CartIcon.propTypes = {
  cart: PropTypes.array,
};

export default CartIcon;
