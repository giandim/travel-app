import {
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import LoginScreen from "./(auth)/login";
import { Hub } from "@aws-amplify/core";

export { ErrorBoundary } from "expo-router";

import { Provider } from "../context/auth";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const { getItem, setItem } = useAsyncStorage("@auth");

  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  // useEffect(() => {
  // const hubListener = Hub.listen('auth', (data) => {
  //   const { payload } = data;
  //   console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
  // })

  // return () => hubListener();
  // }, []);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {/* {loaded && false ? <RootLayoutNav /> : <LoginScreen />} */}
      {loaded && (
        <Provider>
          <Slot />
        </Provider>
      )}
    </>
  );
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
