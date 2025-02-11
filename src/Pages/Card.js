import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react'; // Import icons

function Card() {
  const [cart, setCart] = useLocalStorage('cart', []);

  
  const decreaseQty = (index) => {
    setCart(cart.map((item, i) => i === index ? { ...item, qty: Math.max(1, item.qty - 1) } : item));
  }

  const increaseQty = (index) => {
    setCart(cart.map((item, i) => i === index ? { ...item, qty: item.qty + 1 } : item));
  }

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  }

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-6 font-semibold">Shopping Cart</h1>
          {cart.length > 0 ? (
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-300 px-6 py-3">Title</th>
                  <th className="border border-gray-300 px-6 py-3">Quantity</th>
                  <th className="border border-gray-300 px-6 py-3">Price</th>
                  <th className="border border-gray-300 px-6 py-3">Total</th>
                  <th className="border border-gray-300 px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-6 py-3">{item.title}</td>
                    <td className="border border-gray-300 px-6 py-3 flex items-center justify-center gap-2">
                      <button onClick={() => decreaseQty(index)} className="text-blue-700 hover:text-blue-500">
                        <Minus size={20} />
                      </button>
                      <span className="text-lg">{item.qty}</span>
                      <button onClick={() => increaseQty(index)} className="text-blue-700 hover:text-blue-500">
                        <Plus size={20} />
                      </button>
                    </td>
                    <td className="border border-gray-300 px-6 py-3">{item.vote_average} EUR</td>
                    <td className="border border-gray-300 px-6 py-3">{(item.qty * item.vote_average).toFixed(2)} EUR</td>
                    <td className="border border-gray-300 px-6 py-3">
                      <button onClick={() => removeItem(index)} className="text-red-700 hover:text-red-500">
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          )}

          <form id="checkout" method="POST" className="mt-8">
            <textarea
              name="address"
              placeholder="Enter your delivery address"
              className="w-[400px] border border-gray-300 px-6 py-3 block mb-4 rounded-md"
            ></textarea>
            <button className="text-white bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-md">Checkout</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Card;
