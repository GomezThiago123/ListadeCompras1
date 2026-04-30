import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";

/* TIPOS */
type Producto = {
  id: string;
  nombre: string;
  completado: boolean;
};

type Props = {
  items: Producto[];
  onToggle: (id: string) => void;
  onEliminar: (id: string) => void;
};

/* COMPONENTE */
export default function ListaDeCompras({
  items,
  onToggle,
  onEliminar,
}: Props) {
  const renderizarProducto = ({ item }: { item: Producto }) => {
    const estaCompletado = item.completado;

    return (
      <Pressable
        style={styles.fila}
        onPress={() => onToggle(item.id)}
        onLongPress={() => onEliminar(item.id)}
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
          {estaCompletado ? "✔" : "•"}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={items}
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
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textoFila: {
    fontSize: 16,
  },
  completado: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  indicador: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
  },
  indicadorPendiente: {
    backgroundColor: "#eee",
    color: "#666",
  },
  indicadorCompletado: {
    backgroundColor: "#2ecc71",
    color: "#fff",
  },
  separador: {
    height: 1,
    backgroundColor: "#eee",
  },
  textoVacio: {
    textAlign: "center",
    color: "#777",
    marginTop: 24,
  },
  lista: {
    paddingBottom: 32,
  },
});