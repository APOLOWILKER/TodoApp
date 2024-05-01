
import { theme } from "@/theme";
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface TaskProps {
  taskText: string,
  done: boolean,
  onRemove?: () => void,
  onComplete?: () => void
}

export function Task({taskText, done = false, onRemove, onComplete}: TaskProps) {
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={onComplete}>
        <View style={[styles.checkMenu, done && styles.checked]}>
          {done && (
            <Ionicons 
            name="checkmark-sharp"
            size={24}
            color={theme.colors.gray_100}
            />
          )}
        </View>
      </TouchableOpacity>
      
      <Text style={[styles.taskDescription, done && styles.taskDone]}>
        {taskText}
      </Text>
      <TouchableOpacity onPress={onRemove} >
         <Ionicons
         name="trash-outline"
         size={24}
         color={theme.colors.gray_300}
       />
      </TouchableOpacity>
    </View>
  )
}