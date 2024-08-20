import React, { FC, ReactElement } from "react";
import { useQuery } from "@tanstack/react-query";
import { Grid, Box, Alert, AlertTitle, LinearProgress } from "@mui/material"
import { format } from "date-fns";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ITaskApi } from "./interfaces/ITaskApi";
import Task from "../task/task";
import TaskCounter from "../taskCounter/taskCounter";
import { Status } from "../createTaskForm/enums/Status";

const TaskArea: FC = (): ReactElement => {

  const {error, isLoading, data, refetch} = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const GETquery = await sendApiRequest<ITaskApi[]>(
      `${process.env.REACT_APP_API_URL}/tasks`,
      "GET",
      )
    return GETquery;
    }
  });

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
            { error && (
              <Alert severity="error">
                <AlertTitle>There was an error fetching your tasks!</AlertTitle>
              </Alert>
            )}
            { (!error && Array.isArray(data) && data.length === 0) && (
              <Alert severity="warning">
              <AlertTitle>You have no tasks yet!</AlertTitle>
              Start by creating some tasks.
            </Alert>
            )}
            { isLoading ? (<LinearProgress />) : (
              (Array.isArray(data) && data.length > 0) && (
                data.map((el, index) => {
                  return (el.status !== Status.completed) ? (
                    <Task
                      key={index + el.priority}
                      id={el.id}
                      title={el.title}
                      description={el.description}
                      date={new Date(el.date)}
                      status={el.status}
                      priority={el.priority}
                      />
                    ) : (false);
                })
              )
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
export default TaskArea
