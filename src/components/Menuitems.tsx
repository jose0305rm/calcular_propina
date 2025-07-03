import type { MenuItem } from "../types";

// Nuestros props
type MenuItemProps = { 
  item: MenuItem, //inidicarle que espera un valor de tipo MenuItem
  addItem: () => void //indicarle que este props espera un arrowfunction
};

export default function Menuitems({ item, addItem }: MenuItemProps) { //pasamos los props 
  return (
    <>
      <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
        onClick={() => addItem()}> {/* se usa un arrow funcition para evitar que la funcion se ejecute apenas se llame */}
        <p>{item.name}</p> 
        <p className="font-bold">${item.price}</p>
        
      </button>
    </>
  );
}
