import { ReactNode } from "react";
import { TouchableHighlight, TouchableHighlightProps } from "react-native";
import Text from "./text";
import { FontAwesome } from "@expo/vector-icons";

type ButtonStyleType = "default" | "primary";

const ButtonStyle = new Map<ButtonStyleType, string>([
  ["primary", "bg-lime-300 my-2 p-4 rounded-xl shadow-sm"],
  ["default", "bg-white border border-gray-500 my-2 p-4 rounded-xl shadow-sm"],
]);

interface IProps extends TouchableHighlightProps {
  text: ReactNode;
  type?: ButtonStyleType;
  icon?: React.ComponentProps<typeof FontAwesome>["name"];
}

export default function Button(props: IProps) {
  const { text, ...pressableProps } = props;

  return (
    <TouchableHighlight
      {...pressableProps}
      className={`flex-row items-center justify-center ${ButtonStyle.get(props.type || "default")}`}
    >
      <>
        {props.icon && <FontAwesome name={props.icon} size={18} color="grey" />}
        <Text type="button" className="mx-2">{props.text}</Text>
      </>
    </TouchableHighlight>
  );
}
