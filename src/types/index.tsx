// la estructura que deben seguir todos los elementos (es decir las ordenes)
export type MenuItem = { 
    id: number;
    name: string;
    price: number;
}

// La estructura de los datos agregando cantidad para poder agregarlos a la factura
export type OrderItem = MenuItem & {
    quantity: number;           
}