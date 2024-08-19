import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import emptyCart from "../utils/emptyCart.png";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-slate-200 text-black rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <>
            <div className="mt-4"></div>
            <img
              className="w-[350px] h-[350px] mx-auto"
              src={emptyCart}
              alt="emptyCart img"
            />
          </>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
