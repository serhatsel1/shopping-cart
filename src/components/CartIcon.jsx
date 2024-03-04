import { MdOutlineShoppingCart } from "react-icons/md";

const CartIcon = ({ cart }) => {
  return (
    <div className="relative">
      <MdOutlineShoppingCart className="text-2xl" />
      {cart.length > 0 && (
        <span className="bg-red-500 text-white rounded-full  w-5 h-5 flex justify-center items-center absolute -top-2 -right-2 text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
