import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useFonts } from "expo-font";
import { Stack, Tabs, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function RootLayout() {

  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  })
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="homepage"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="searchpage"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profilepage"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="face" size={24} color="black" />,
        }}
      />
       <Tabs.Screen
        name="loginpage"
        options={{
          title: 'login',
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: {
            display: "none"
          }
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarStyle: {
            display: "none"
          }
        }}
      />
      <Tabs.Screen
        name="tabdetail"
        options={{
          tabBarButton: () => null,
          headerShown: false,
        }}
      />
  <Tabs.Screen
    name="registerpage"
    options={{
      title: 'Regis',
      tabBarButton: () => null,
      headerShown: true,
      tabBarStyle: {
        display: "none"
      }
    }}
  />
    </Tabs>
  );
}
