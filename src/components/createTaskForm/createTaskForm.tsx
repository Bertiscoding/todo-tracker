import React, {FC, ReactElement} from "react"
import { Box, Typography, Stack } from "@mui/material"
import TaskTitleField from "./_taskTitleField";
import TaskDescriptionField from "./_taskDescriptionField";
import TaskDateField from "./_taskDateField";
import TaskSelectField from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";

const CreateTaskForm: FC = (): ReactElement => {

  const capitalizeString = (text: string): string => {
    if (!text) return "";
    return text[0].toUpperCase() + text.slice(1);
  };

  return (
   <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      px={4}
      my={6}
    >
    <Typography variant="h6" component="h2" mb={2}>Create A Task</Typography>
    <Stack sx={{width: "100%"}} spacing={2}>
      <TaskTitleField />
      <TaskDescriptionField />
      <TaskDateField />

      <Stack direction="row" spacing={2} sx={{width: "100%"}}>
        <TaskSelectField
          label="Status"
          name="status"
          items={[
            {
              value: Status.todo,
              label: capitalizeString(Status.todo)
            },
            {
              value: Status.inProgress,
              label: ((capitalizeString(Status.inProgress)).split(/(?<![A-Z])(?=[A-Z])/).join(" "))
            },
            {
              value: Status.completed,
              label: capitalizeString(Status.completed)
            }
          ]}
        />
        <TaskSelectField
          label="Priority"
          name="priority"
          items={[
            {
              value: Priority.high,
              label: capitalizeString(Priority.high)
            },
            {
              value: Priority.normal,
              label: capitalizeString(Priority.normal)
            },
            {
              value: Priority.low,
              label:capitalizeString(Priority.low)
            }
          ]}
        />
      </Stack>

    </Stack>
   </Box>
  )
}
export default CreateTaskForm;
