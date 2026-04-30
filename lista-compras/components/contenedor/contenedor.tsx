import { View, ViewProps, StyleSheet } from "react-native";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Contenedor({ children }: Props) {
  return (
    <View style={styles.container}>
      {children}
    </View>
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