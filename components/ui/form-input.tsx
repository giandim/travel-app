import { Control, Controller, UseControllerProps } from "react-hook-form";
import Input, { ICustomInputProps } from "./input";

interface IProps extends Omit<ICustomInputProps, "defaultValue">, UseControllerProps {}

export default function FormInput(props: IProps) {
  const { control, name, rules, ...inputProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          {...inputProps}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
    />
  );
}
