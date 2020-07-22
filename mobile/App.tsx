import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import { ThemeProvider, DefaultTheme } from "styled-components";

import usePersistedState from "./src/utils/usePersistedState";
import light from "./src/styles/Themes/light";
import dark from "./src/styles/Themes/dark";

import Routes from "./src/routes";

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ThemeProvider theme={theme}>
        <Routes toggleTheme={toggleTheme} theme={theme} />
      </ThemeProvider>
    </>
  );
}
