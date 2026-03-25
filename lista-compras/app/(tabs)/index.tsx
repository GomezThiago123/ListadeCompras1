import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';

/*TIPOS*/
type Producto = {
  id: string;
  nombre: string;
  completado: boolean;
};

/*COMPONENTE*/
export default function App() {
  const [listaProductos, setListaProductos] = useState<Producto[]>([]);
  const [textoInput, setTextoInput] = useState('');

  /*FUNCIONES*/

  const agregarProducto = () => {
    const valor = textoInput.trim();
    if (!valor) return;

    const nuevoProducto: Producto = {
      id: Date.now().toString(),
      nombre: valor,
      completado: false,
    };

    setListaProductos((prev) => [...prev, nuevoProducto]);
    setTextoInput('');
  };

  const alternarProducto = (id: string) => {
    setListaProductos((prev) =>
      prev.map((producto) =>
        producto.id === id
          ? { ...producto, completado: !producto.completado }
          : producto
      )
    );
  };

  const eliminarProducto = (id: string) => {
    setListaProductos((prev) =>
      prev.filter((producto) => producto.id !== id)
    );
  };

  /*RENDER ITEM*/

  const renderizarProducto = ({ item }: { item: Producto }) => {
    const estaCompletado = item.completado;

    return (
      <Pressable
        style={styles.fila}
        onPress={() => alternarProducto(item.id)}
        onLongPress={() => eliminarProducto(item.id)}
      >
        <Text style={[styles.textoFila, estaCompletado && styles.completado]}>
          {item.nombre}
        </Text>

        <Text
          style={[
            styles.indicador,
            estaCompletado
              ? styles.indicadorCompletado
              : styles.indicadorPendiente,
          ]}
        >
          {estaCompletado ? '✔' : '•'}
        </Text>
      </Pressable>
    );
  };

  /*UI*/

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.filaInput}>
        <TextInput
          value={textoInput}
          onChangeText={setTextoInput}
          placeholder="Agregar producto (ej: Leche)"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={agregarProducto}
        />

        <Pressable style={styles.botonAgregar} onPress={agregarProducto}>
          <Text style={styles.textoBoton}>Agregar</Text>
        </Pressable>
      </View>

      <FlatList
        data={listaProductos}
        keyExtractor={(item) => item.id}
        renderItem={renderizarProducto}
        contentContainerStyle={styles.lista}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        ListEmptyComponent={
          <Text style={styles.textoVacio}>
            Sin productos. Agregá el primero.
          </Text>
        }
      />
    </View>
  );
}

/*ESTILOS*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },
  filaInput: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  botonAgregar: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
  },
  fila: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoFila: {
    fontSize: 16,
  },
  completado: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  indicador: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  indicadorPendiente: {
    backgroundColor: '#eee',
    color: '#666',
  },
  indicadorCompletado: {
    backgroundColor: '#2ecc71',
    color: '#fff',
  },
  separador: {
    height: 1,
    backgroundColor: '#eee',
  },
  textoVacio: {
    textAlign: 'center',
    color: '#777',
    marginTop: 24,
  },
  lista: {
    paddingBottom: 32,
  },
});