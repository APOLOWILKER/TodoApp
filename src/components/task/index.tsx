
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface TaskProps {
  task: string,
  onRemove: () => void,
  onComplete: () => void
}

export function Task({task, onRemove, onComplete}: TaskProps) {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onComplete} >
          <Text style={styles.buttonText}>
            -
          </Text>
      </TouchableOpacity>
      <Text style={styles.name}>
        {task}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove} >
          <Text style={styles.buttonText}>
            -
          </Text>
      </TouchableOpacity>
    </View>
  )
}