
import { theme } from "@/theme";
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface TaskProps {
  taskText: string,
  onRemove?: () => void,
  onComplete?: () => void
}

export function Task({taskText, onRemove, onComplete}: TaskProps) {
  return(
    <View style={styles.container}>
         <Ionicons 
          name="checkmark-sharp"
          size={9}
          color={theme.colors.gray_100}
         />
      <Text style={styles.name}>
        {taskText}
      </Text>
      <TouchableOpacity style={styles.trashButton} onPress={onRemove} >
         <Ionicons
         name="trash-outline"
         size={14}
         color={theme.colors.gray_300}
       />
      </TouchableOpacity>
    </View>
  )
}