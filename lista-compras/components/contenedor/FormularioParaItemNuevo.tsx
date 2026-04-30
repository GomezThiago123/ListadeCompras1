import { useState } from "react";
import { View, TextInput, Button } from "react-native";

type Props = {
  onAgregar: (texto: string) => void;
};

export default function FormularioParaItemNuevo({ onAgregar }: Props) {
  const [texto, setTexto] = useState("");

  const manejarAgregar = () => {
    if (!texto.trim()) return;

    onAgregar(texto);
    setTexto("");
  };

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <TextInput
        style={{
          flex: 1,
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
        }}
        placeholder="Agregar item..."
        value={texto}
        onChangeText={setTexto}
      />

      <Button title="Agregar" onPress={manejarAgregar} />
    </View>
  );
}