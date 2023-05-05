import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import CustomTabBarButton from "../../components/ui/tab-bar-button";

interface IRoute {
  name: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
  href: string
}

const Routes: IRoute[] = [
  { name: "Home", icon: "home", href: "index" },
  { name: "Trip", icon: "list", href: "trip" },
  { name: "Budget", icon: "money", href: "budget" },
  { name: "Tickets", icon: "ticket", href: "tickets" },
];

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function HomeLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      {Routes.map((r) => (
        <Tabs.Screen
          key={r.name}
          name={r.href}
          options={{
            tabBarShowLabel: false,
            title: r.name,
            tabBarIcon: ({ color }) => <TabBarIcon name={r.icon} color={color}  />,
            tabBarActiveTintColor: 'red',
            tabBarButton: props => <CustomTabBarButton {...props} />
          }}
        />
      ))}
    </Tabs>
  );
}
