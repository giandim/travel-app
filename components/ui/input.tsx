import { FontAwesome } from "@expo/vector-icons";
import { TextInput, TextInputProps, View } from "react-native";
import Text from "./text";

type InputStyleType = "login" | "default";

export interface ICustomInputProps extends TextInputProps {
  icon?: React.ComponentProps<typeof FontAwesome>["name"];
  label?: string;
  inputStyleType?: InputStyleType;
}

const InputStyle = new Map<InputStyleType, string>([
  ["login", "border border-gray-300 p-4 rounded-lg"],
  ["default", "bg-blue-50 p-4 rounded-3xl"],
]);

export default function Input(props: ICustomInputProps) {
  return (
    <View className="my-2">
      {/* WITH LABEL */}
      {props.label && <Text type="label">{props.label}</Text>}

      <View className={`flex flex-row border-gray-300 ${InputStyle.get(props.inputStyleType || 'default')}`}>
        {/* WITH ICON */}
        {props.icon && <FontAwesome name={props.icon} size={18} color="grey" />}

        <TextInput
          {...props}
          className="border-black flex-1 pl-3"
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
}
