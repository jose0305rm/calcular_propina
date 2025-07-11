import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  //una lista que solo permite agregar objetos de tipo OrderItem ()
  //se le llama generics, y le da prioridad al tipo de dato dentro de <>

  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    //debemos especificar que tipo de dato le estamos pasando
    // console.log(item) //ejemplo para ver si funciona nuestra funcion

    const itemExist = order.find( orderitem => orderitem.id === item.id);
    // si en nuestro useState OrderItem existe un registro igual que el item que le stamos pasando
    //va a retornar true o false

    if (itemExist) {
        // Evitando Duplicados
        const updateOrder = order.map(orderItem => orderItem.id === item.id ? 
          {...orderItem, quantity: orderItem.quantity + 1} : orderItem )
        //Toma el elemento y evalua si coincide con el elemento de la lista, si lo es, cambia su cantidad, si no, deje ese elemento y pasa  al siguiente

        setOrder(updateOrder);
    } 
    else {
      const newItem: OrderItem = { ...item, quantity: 1 }; //lo podemos castear para que asegurarnos que se de tipo OrderItem
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id:  MenuItem['id']) =>  {
    setOrder(order.filter( item => item.id !== id))
    // si el id del elemento a evaluar es igual al id que le estamos pasando, lo borramos
  }

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
    console.log('Guardando...'); //no guarda, solo hace la simulkacion
    //se puede guardar en base de datos o en local storage
  }


  return {
    addItem, //retornamos la fucnion para utilizarla en otros archivos
    tip, 
    setTip,
    order, //importamo el listado de ordenes con su cantidad
    removeItem, //importamos funcion que elimina el item de la lista
    placeOrder
  };
}
