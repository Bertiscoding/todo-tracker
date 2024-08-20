import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { ITask } from './interfaces/ITask';
import TaskHeader from './_taskHeader';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

const Task: FC<ITask> = (props): ReactElement => {
  const { 
    id,
    title="Task Title",
    date=new Date(),
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    priority=Priority.low,
    status=Status.completed,
    onStatusChange=(e) => console.log(e),
    onClick=(e) => console.log(e),
   } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: renderPriorityBorderColor(priority),
        status: status 
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

export default Task;
