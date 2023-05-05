import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import Form, { IFormField } from "../../components/form";
import { auth, provider } from "../../firebaseConfig";
import * as yup from "yup";
import Text from "../../components/ui/text";
import Button from "../../components/ui/button";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const formFields: IFormField[] = [
  {
    name: "email",
    placeholder: "Email",
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
  const onSubmit = async (data: any) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center p-5">
      <Form fields={formFields} schema={schema} onSubmit={onSubmit} buttonText="Login"/>
      <Text className="text-center">-- OR --</Text>
      <Button text="Login with Google" icon="google"/>
    </SafeAreaView>
  );
}
