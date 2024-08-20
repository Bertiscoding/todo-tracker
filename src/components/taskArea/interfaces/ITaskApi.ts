import { Priority } from "../../createTaskForm/enums/Priority";
import { Status } from "../../createTaskForm/enums/Status";

export interface ITaskApi {
  id: string;
  title: string;
  description: string;
  date: string;
  status: `${Status}`;
  priority: `${Priority}`; // syntax for enums in interfaces --> interpolation makes it type string
}
