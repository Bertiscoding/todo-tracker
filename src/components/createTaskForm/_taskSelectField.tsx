import React, { FC, ReactElement } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material"
import { ISelectField } from './interfaces/ISelectField';

const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    label = "Please select",
    name = "select-field",
    value = "",
    onChange = (e: SelectChangeEvent) => {console.log(e);
    },
    disabled = false,
    items = [{ value: "", label: "Item"}]
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`{${name}-label}`}>{label}</InputLabel>
      <Select
        labelId={`{${name}-label}`}
        id={`{${name}-id}`}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
      {
        items.map((item, i) => (
          <MenuItem key={item.value + i} value={item.value}>{item.label}</MenuItem>
        ))
      }
    </Select>
  </FormControl>
  );
};

export default TaskSelectField;
