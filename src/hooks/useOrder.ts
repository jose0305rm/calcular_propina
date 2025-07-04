import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  //una lista que solo permite agregar objetos de tipo OrderItem ()
  //se le llama generics, y le da prioridad al tipo de dato dentro de <>

  const addItem = (item: MenuItem) => {
    //debemos especificar que tipo de dato le estamos pasando
    // console.log(item) //ejemplo para ver si funciona nuestra funcion

    const itemExist = order.find( orderitem => orderitem.id === item.id);
    // si en nuestro useState OrderItem existe un registro igual que el item que le stamos pasando
    //va a retornar true o false

    if (itemExist) {
        const updateOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem )
        setOrder(updateOrder);
    } 
    else {
      const newItem: OrderItem = { ...item, quantity: 1 }; //lo podemos castear para que asegurarnos que se de tipo OrderItem
      setOrder([...order, newItem]);
    }
  };

  console.log(order);

  return {
    addItem, //retornamos la fucnion para utilizarla en otros archivos
  };
}
