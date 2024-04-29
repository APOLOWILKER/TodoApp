import { theme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface InputTaskProps {
  onChangeText: (text: string) => void,
  value: string,
  placeholder: string,
  onPress: () => void,
}


export function InputTask({onChangeText, value, placeholder, onPress}: InputTaskProps) {
  return(
    <View style={styles.containerInput}>
      <TextInput
        style={styles.inputText} 
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray_200}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <TouchableOpacity style={styles.buttonTask} onPress={onPress}>
        <Ionicons 
          name="add-circle-outline"
          size={24}
          color={theme.colors.gray_200}
        />
      </TouchableOpacity>
    </View>
  )
}