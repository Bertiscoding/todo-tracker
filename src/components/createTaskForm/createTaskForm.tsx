import React, {FC, ReactElement} from "react"
import { Box, Typography, Stack } from "@mui/material"
import TaskTitleField from "./_taskTitleField";
import TaskDescriptionField from "./_taskDescriptionField";
import TaskDateField from "./_taskDateField";
import TaskSelectField from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
import { capitalizeString, capitalizeStringAndSplit } from "../taskCounter/helpers/capitalizeString";

const CreateTaskForm: FC = (): ReactElement => {

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
              label: capitalizeStringAndSplit(Status.todo)
            },
            {
              value: Status.inProgress,
              label: capitalizeStringAndSplit(Status.inProgress)
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
