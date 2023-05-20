import { Auth } from "aws-amplify";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import Form, { IFormField } from "../../components/form";
import Text from "../../components/ui/text";
import Button from "../../components/ui/button";
import { useRouter } from "expo-router";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const formFields: IFormField[] = [
  {
    name: "username",
    placeholder: "Username",
    inputStyleType: "login",
    icon: "user"
  },
  {
    name: "password",
    secureTextEntry: true,
    placeholder: "Password",
    inputStyleType: "login",
    icon: "lock"
  },
];

export default function CreateAccountScreen() {
  const router = useRouter();
  const [error, setError] = useState<string>();

  const onSubmit = async (data: any) => {
    try {
      setError("");
      await Auth.signUp(data.username, data.password)
    } catch (error) {
      setError("Please try again")
    }
    
  };

  return (
    <SafeAreaView className="flex-1 justify-center p-5">
      <Text type="error">{error}</Text>
      <Form fields={formFields} schema={schema} onSubmit={onSubmit} buttonText="Register"/>
      <Text className="text-center">-- OR --</Text>
      <Button text="Sign In" onPress={() => router.push("/login")}/>
    </SafeAreaView>
  );
}
