import { EmptyTask } from "@/components/emptyTask";
import { InputTask } from "@/components/input";
import { Task } from "@/components/task";
import { capitalizeTask, countTasksCompleted } from "@/utils";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import uuid from "react-native-uuid";
import { styles } from "./styles";


export interface TaskProps {
  id: string,
  description: string,
  done: boolean,
}

export function Home() {
  // estado para criar tarefa 
  const [taskDescription, setTaskDescription] = useState("");
  // estado para exibir e armazenar tarefas
  const [taskList, setTaskList] = useState<TaskProps[]>([]);

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  function handleTaskCreated() {
    const newTask = {
      id: String(uuid.v4()),
      description: capitalizeTask(taskDescription),
      done: false,
    }

    setTaskList(prevState => [...prevState, newTask])
    setTaskDescription("")
  }

  function handleTaskRemoved(id: string) {
    setTaskList(prevState => prevState.filter(task => task.id!== id))
  }

  function handleTaskCompleted(id: string) {
    const newTaskList = taskList.map((task)=> {
      return {
        ...task,
        done: task.id === id ? !task.done : task.done,
      }
    })
    setTaskList(newTaskList)
  }


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={require("../../assets/Logo.png")}
        />
      </View>

      <InputTask
        placeholder="Adicione uma nova tarefa"
        onChangeText={setTaskDescription}
        value={taskDescription}
        onPress={handleTaskCreated}
      />

      <View style={styles.tasksGroup}>
        <View style={styles.containerFeedBackTask}>
          <View style={styles.containerStatusBlock}>
            <Text style={styles.taskStatusText}>Criadas </Text>
            <View style={styles.taskStatusBlock}>
              <Text style={styles.taskStatusValueNumber}>{taskList.length}</Text>
            </View>
          </View>
          
          <View style={styles.containerStatusBlock}>
            <Text style={styles.taskStatusText}>Concluídas</Text>
            <View style={styles.taskStatusBlock}>
              <Text style={styles.taskStatusValueNumber}>{countTasksCompleted(taskList)}</Text>
            </View>
          </View>

        </View>

        <FlatList 
          data={taskList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Task 
              key={item.id}
              taskText={item.description}
              done={item.done}
              onRemove={() => handleTaskRemoved(item.id)}
              onComplete={() => handleTaskCompleted(item.id)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<EmptyTask />}
        />

      </View>
    </View>
  )
}