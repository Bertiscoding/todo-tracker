import { TaskCounterStatusType } from "../interfaces/ITaskCounter"
import { Status } from "../../createTaskForm/enums/Status";
import { capitalizeString, capitalizeStringAndSplit } from "./capitalizeString";

export const determineCounterLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return capitalizeStringAndSplit(Status.todo);
      break;
    case Status.inProgress:
      return capitalizeStringAndSplit(Status.inProgress);
      break;
    case Status.completed:
      return capitalizeString(Status.completed);
      break;
  
    default:
      return capitalizeString(Status.completed);
      break;
  }
}
