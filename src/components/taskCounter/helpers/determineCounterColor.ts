import { TaskCounterStatusType } from "../interfaces/ITaskCounter"
import { Status } from "../../createTaskForm/enums/Status";

export const determineCounterColor = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return "error.light";
      break;
    case Status.inProgress:
      return "warning.light";
      break;
    case Status.completed:
      return "success.light";
      break;
  
    default:
      return "primary.main";
      break;
  }
}
