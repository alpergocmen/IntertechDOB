const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import StatusBarDark from "./components/StatusBarDark";
import Info2 from "./screens/Info2";
import LandingPage from "./screens/LandingPage";
import KvkkPage from "./screens/KvkkPage";
import Info from "./screens/Info";
import KimlikOnYuz from "./screens/KimlikOnYuz";
import KimlikArkaYuz from "./screens/KimlikArkaYuz";
import Selfie from "./screens/Selfie";
import CallCenter from "./screens/CallCenter";
import LandingPage2 from "./screens/LandingPage2";
import LandingPageFalseOnYuz from "./screens/LandingPageFalseOnYuz";
import LandingPageFalseArkaYuz from "./screens/LandingPageFalseArkaYuz";
import LandingPageTrueOnYuz from "./screens/LandingPageTrueOnYuz";
import LandingPageTrueArkaYuz from "./screens/LandingPageTrueArkaYuz";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info2"
              component={Info2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KvkkPage"
              component={KvkkPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Info"
              component={Info}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KimlikOnYuz"
              component={KimlikOnYuz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KimlikArkaYuz"
              component={KimlikArkaYuz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Selfie"
              component={Selfie}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CallCenter"
              component={CallCenter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPage2"
              component={LandingPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPageFalseOnYuz"
              component={LandingPageFalseOnYuz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPageFalseArkaYuz"
              component={LandingPageFalseArkaYuz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPageTrueOnYuz"
              component={LandingPageTrueOnYuz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPageTrueArkaYuz"
              component={LandingPageTrueArkaYuz}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
