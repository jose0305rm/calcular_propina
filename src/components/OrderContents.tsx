import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (orderitem: MenuItem["id"]) => void
};

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">
        Consumo
        {/* titulo de la pestania */}
      </h2>

      <div className="space-y-3 mt-10">
        {order.length === 0 ? (
          // si la lista order no tiene elementos
          <p className="text-center">La Orden esta vacia</p>
        ) : (
          // si la lista order tiene elementos
          order.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
              <div>
                <p>
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">Cantidad: {item.quantity}</p>
                <p className="font-black">
                  Precio Total: {formatCurrency(item.price * item.quantity)}
                </p>
              </div>

              <button 
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}>
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
