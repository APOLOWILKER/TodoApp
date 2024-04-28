import { theme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export function InputTask() {
  return(
    <View style={styles.containerInput}>
      <TextInput
        style={styles.inputText} 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.colors.gray_200}
      />

      <TouchableOpacity style={styles.buttonTask}>
        <Ionicons 
          name="add-circle-outline"
          size={24}
          color={theme.colors.gray_200}
        />
      </TouchableOpacity>
    </View>
  )
}