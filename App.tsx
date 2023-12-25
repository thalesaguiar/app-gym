import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Text, View, StatusBar } from "react-native";
import { TamaguiProvider } from "@tamagui/core";
import config from "./tamagui.config";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <TamaguiProvider config={config}>
      {
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#202024",
          }}
        >
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {fontsLoaded ? (
            <Text
              style={{ fontFamily: "Roboto_700Bold", color: "#fff" }}
            ></Text>
          ) : (
            <Loading />
          )}
        </View>
      }
    </TamaguiProvider>
  );
}
