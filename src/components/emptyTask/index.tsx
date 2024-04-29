import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyTask() {
  return(
    <View style={styles.container}>
      <Image 
        source={require('../../assets/Clipboard.png')}
        style={styles.emptyTaskImage}
      />
      <Text style={styles.emptyMessage}>Você ainda não tem Tarefas Cadastradas
        <Text style={styles.subEmptyMessage}>{'\n'} Crie tarefas e organize seus itens a fazer</Text>
      </Text>
    </View>
  )
}