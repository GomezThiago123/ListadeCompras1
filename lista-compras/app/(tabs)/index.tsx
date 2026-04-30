import Contenedor from '@/components/contenedor/contenedor';
import FormularioParaItemNuevo from '@/components/contenedor/FormularioParaItemNuevo';
import ListaDeCompras from '@/components/contenedor/ListaDeCompras';
import TituloDeLaPagina from '@/components/contenedor/TituloDeLaPagina';

import usarItemsDeCompra from '@/hooks/usarItemsDeCompra';

import { StyleSheet } from 'react-native';

/* COMPONENTE */
export default function App() {
  const {
    items,
    agregarItem,
    alternarItem,
    eliminarItem,
  } = usarItemsDeCompra();

  return (
    <Contenedor style={styles.container}>
      <TituloDeLaPagina titulo="Lista de compras" />

      <FormularioParaItemNuevo onAgregar={agregarItem} />

      <ListaDeCompras
        items={items}
        onToggle={alternarItem}
        onEliminar={eliminarItem}
      />
    </Contenedor>
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: '#fff',
  },
});