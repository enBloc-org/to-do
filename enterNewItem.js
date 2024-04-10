import { renderTaskList } from "./main"
import { Task } from "./modules/task-objects"

export default function enterNewItem(keyPress, activeElement) {
  let emptyField = new RegExp(/^\s*$/)

  if (keyPress.key === "Enter" && !emptyField.test(activeElement.value)) {
    let description = activeElement.value
    let done = activeElement.parentElement.querySelector("input").checked
    let status = done === true ? TaskStatus.Complete : TaskStatus.InProgress
    taskCollection.addTask(new Task(description, status))
    taskCollection.saveAllTasksToStorage
    renderTaskList()
  }
}
