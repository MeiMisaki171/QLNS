import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "~/context/ProductContext";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProduct();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-red-500">Sản phẩm không tồn tại!</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl text-gray-600">${product.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
        🛒 Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductDetail;
