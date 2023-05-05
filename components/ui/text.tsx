import { PropsWithChildren } from "react";
import { Text as DefaultText, TextProps } from "react-native";

type TextType = "header" | "label" | "default" | "button";

const style = new Map<TextType, string>([
  ["header", "text-2xl text-blue-500 text-center"],
  ["label", "text-md text-red-500"],
  ["default", "text-sm"],
  ["button", "text-md"],
]);

interface IProps extends TextProps, PropsWithChildren {
  type?: TextType;
}

export default function Text(props: IProps) {
  return (
    <DefaultText
      style={{ fontFamily: "Poppins_400Regular" }}
      className={`text-lg ${style.get(props.type || "default")}`}
      {...props}
    >
      {props.children}
    </DefaultText>
  );
}
