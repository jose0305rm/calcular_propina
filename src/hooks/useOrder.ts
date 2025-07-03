import { useState } from "react";
import type { OrderItem } from "../types";

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]); 
    //una lista que solo permite agregar objetos de tipo OrderItem ()
    //se le llama generics, y le da prioridad al tipo de dato dentro de <>
    

    const addItem = () => {
        console.log('agregando...') //ejemplo para ver si funciona nuestra funcion
    }

    return{
        addItem //retornamos la fucnion para utilizarla en otros archivos
    }
}
 