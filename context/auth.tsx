import { useRouter, useSegments } from "expo-router";
import React from "react";

interface IContext {
  signIn: (token: string) => void;
  signOut: () => void;
  user: any | null;
}

const AuthContext = React.createContext<IContext>({
  signIn: () => {},
  signOut: () => {},
  user: null,
});

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: unknown) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      // router.replace("/");
      router.replace("/(auth)/login");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

export function Provider(props: any) {
  const [user, setAuth] = React.useState<string | undefined>(undefined);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (token: string) => setAuth(token),
        signOut: () => setAuth(undefined),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
