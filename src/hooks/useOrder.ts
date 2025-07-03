import { useState } from "react";
import type { OrderItem } from "../types";

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]); //una lista que solo permite agregar objetos de tipo OrderItem
    const [total, setTotal] = useState(0);
    const [auth, setAuth] = useState(false);

    return{

    }
}
 