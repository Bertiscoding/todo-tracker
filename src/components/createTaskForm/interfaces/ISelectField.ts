import { IDisabled } from "./IDisabled";
import { SelectChangeEvent } from "@mui/material";

export interface ISelectItems {
  value: string;
  label: string;
}

export interface ISelectField extends IDisabled {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items: ISelectItems[];
}
