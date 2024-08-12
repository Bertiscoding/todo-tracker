import React, { FC, ReactElement } from "react";
import { Grid, Box } from "@mui/material"
import { format } from "date-fns";
import TaskCounter from "../taskCounter/taskCounter";
import { Status } from "../createTaskForm/enums/Status";
import Task from "../task/task";

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of Your Tasks Due On{' '}{ format(new Date(), "PPPP") }</h2>
      </Box>
      <Grid
        container
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid
          item
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter status={Status.todo} />
          <TaskCounter status={Status.inProgress} />
          <TaskCounter status={Status.completed} />
        </Grid>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Grid
            item
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            md={8}
            xs={10}
          >
            <Task />
            <Task />
            <Task />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
export default TaskArea
