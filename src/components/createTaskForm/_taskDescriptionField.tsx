import React, {FC, ReactElement} from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";

const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const { 
    onChange = (e) => {console.log(e.target.value)},
    disabled = false
  } = props;

  return (
    <TextField
      id="description"
      label="Task Description"
      placeholder="Task Description"
      variant="outlined"
      size="small"
      name="description"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  )
}
export default TaskDescriptionField;
