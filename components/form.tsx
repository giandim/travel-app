import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";
import Button from "./ui/button";
import Input, { ICustomInputProps } from "./ui/input";
import Text from "./ui/text";

export interface IFormField extends ICustomInputProps {
  name: string;
}

interface IProps {
  fields: IFormField[];
  schema: AnyObjectSchema;
  buttonText?: string;
  onSubmit: (data: any) => void;
}

export default function Form(props: IProps) {
  const {control, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(props.schema)});

  const onSubmit = (data: any) => {
    return props.onSubmit(data);
  };

  return (
    <>
      {props.fields.map((fieldItem) => (
        <Controller
          key={fieldItem.name}
          control={control}
          name={fieldItem.name}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Input
                {...fieldItem}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors[fieldItem.name] && (
                <Text className="text-red-500 pl-2">{errors[fieldItem.name]?.message as string}</Text>
              )}
            </>
          )}
        />
      ))}

      <Button
        // className="bg-lime-300 my-2 p-4 rounded-xl w-full self-end shadow-sm"
        onPress={handleSubmit(onSubmit)}
        text={props.buttonText || 'Submit'}
        type='primary'
      >
      </Button>
    </>
  );
}
