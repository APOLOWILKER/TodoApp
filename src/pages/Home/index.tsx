import { InputTask } from "@/components/input";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { Image, Text, View } from "react-native";
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

    

      <View style={styles.tasksGroup}>
        <View style={styles.containerFeedBackTask}>
          <View style={styles.containerStatusBlock}>
            <Text style={styles.taskStatusText}>Criadas </Text>
            <View style={styles.taskStatusBlock}>
              <Text style={styles.taskStatusValueNumber}>05</Text>
            </View>
          </View>
          
          <View style={styles.containerStatusBlock}>
            <Text style={styles.taskStatusText}>Concluídas</Text>
            <View style={styles.taskStatusBlock}>
              <Text style={styles.taskStatusValueNumber}>02</Text>
            </View>
          </View>

        </View>



      </View>

     
    </View>
  )
}