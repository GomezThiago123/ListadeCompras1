import { useState } from "react";

/* TIPO */
export type Producto = {
  id: string;
  nombre: string;
  completado: boolean;
};

/* HOOK */
export default function usarItemsDeCompra() {
  const [items, setItems] = useState<Producto[]>([]);

  const agregarItem = (texto: string) => {
    const valor = texto.trim();
    if (!valor) return;

    const nuevoItem: Producto = {
      id: Date.now().toString(),
      nombre: valor,
      completado: false,
    };

    setItems((prev) => [...prev, nuevoItem]);
  };

  const alternarItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, completado: !item.completado }
          : item
      )
    );
  };

  const eliminarItem = (id: string) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return {
    items,
    agregarItem,
    alternarItem,
    eliminarItem,
  };
}