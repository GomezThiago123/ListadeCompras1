import { Text, TextProps } from "react-native";

type Props = {
  titulo: string;
} & TextProps;

export default function TituloDeLaPagina({ titulo, style, ...props }: Props) {
  return (
    <Text
      {...props}
      style={[
        { fontSize: 24, fontWeight: "bold" },
        style,
      ]}
    >
      {titulo}
    </Text>
  );
}