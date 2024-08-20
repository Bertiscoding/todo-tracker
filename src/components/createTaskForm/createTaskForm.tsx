import React, { FC, ReactElement, useState } from "react"
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  Stack,
  Alert,
  Button,
  Typography,
  AlertTitle,
  LinearProgress,
} from "@mui/material"
import TaskTitleField from "./_taskTitleField";
import TaskDescriptionField from "./_taskDescriptionField";
import TaskDateField from "./_taskDateField";
import TaskSelectField from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
import { capitalizeString, capitalizeStringAndSplit } from "../taskCounter/helpers/capitalizeString";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "../taskArea/interfaces/ICreateTask";

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  
  const createTaskMutation = useMutation({
    mutationFn: (data: ICreateTask) => sendApiRequest(
      `${process.env.REACT_APP_API_URL}/tasks`,
      "POST",
      data
    )
  });

  function createTaskHandler() {
    if(!title || !date || !description) return;

    const task: ICreateTask = {
      title,
      description,
      date: new Date(date).toLocaleDateString("de-DE"),
      status,
      priority
    };
    createTaskMutation.mutate(task);
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
    <Alert severity="success" sx={{ width: "100%", marginBottom: "16px" }}>
      <AlertTitle>Success</AlertTitle>
        The task has been created succesfully!
    </Alert>
    <Typography variant="h6" component="h2" mb={2}>Create A Task</Typography>
    <Stack sx={{width: "100%"}} spacing={2}>

      <TaskTitleField
        onChange={(e) => {setTitle(e.target.value)}}
      />

      <TaskDescriptionField
        onChange={(e) => {setDescription(e.target.value)}}
      />

      <TaskDateField
        value={date}
        onChange={(date) => {setDate(date)}}
      />

      <Stack direction="row" spacing={2} sx={{width: "100%"}}>
        <TaskSelectField
          label="Status"
          name="status"
          value={status}
          onChange={(e) => {setStatus(e.target.value)}}
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
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
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
      <LinearProgress />
      <Button
        variant="contained"
        size="large"
        fullWidth
        onClick={createTaskHandler} // just passed, only invoked onClick
      >Create Task</Button>
    </Stack>
   </Box>
  )
}
export default CreateTaskForm;
