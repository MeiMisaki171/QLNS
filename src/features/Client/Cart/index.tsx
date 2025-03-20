import React, { useState } from "react";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ name: string; price: number }[]>([]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛒 Giỏ hàng</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Giỏ hàng trống!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="border p-2 my-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
