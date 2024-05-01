import { TaskProps } from "@/pages/Home";

export function countTasksCompleted(taskList: TaskProps[]){
  return taskList.filter((task) => task.done).length
}


export function capitalizeTask(task: string){
  return task.charAt(0).toUpperCase() + task.slice(1);
}