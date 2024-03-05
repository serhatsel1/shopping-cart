import CartIcon from "./CartIcon";

import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold">
        React ve Talwind CSS Sepet Uygulaması
      </h1>
      <CartIcon />
    </div>
  );
};

Header.propTypes = {
  cart: PropTypes.array,
};

export default Header;
