import { Auth } from "aws-amplify";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import Form, { IFormField } from "../../components/form";
import Button from "../../components/ui/button";
import Text from "../../components/ui/text";
import { useAuth } from "../../context/auth";

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

export default function LoginScreen() {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const {signIn} = useAuth();

  const onSubmit = async (data: any) => {
    try {
      setError("");
      const user = await Auth.signIn(data.username, data.password);
      signIn(user)
    } catch (error) {
      setError("Wrong Username or Password")
    }
    
  };

  return (
    <SafeAreaView className="flex-1 justify-center p-5">
      <Text type="error">{error}</Text>
      <Form fields={formFields} schema={schema} onSubmit={onSubmit} buttonText="Login"/>
      <Text className="text-center">-- OR --</Text>
      <Button text="Create a new Account" onPress={() => router.push("/create-account")}/>
    </SafeAreaView>
  );
}
