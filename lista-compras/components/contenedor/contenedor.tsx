import { View, ViewProps } from "react-native";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ViewProps;

export default function Contenedor({ children, style, ...props }: Props) {
  return (
    <View {...props} style={style}>
      {children}
    </View>
  );
}