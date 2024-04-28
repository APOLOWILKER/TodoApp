import { InputTask } from "@/components/input";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { Image, View } from "react-native";
import { styles } from "./styles";


export function Home() {

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={require("../../assets/Logo.png")}
        />
      </View>

      <InputTask />

     
    </View>
  )
}