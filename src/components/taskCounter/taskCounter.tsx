import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Status } from '../createTaskForm/enums/Status';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { determineCounterColor } from './helpers/determineCounterColor';
import { determineCounterLabel } from './helpers/determineCounterLabel';

const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const {
    count = 0,
    status = Status.completed,
  } = props

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          height: "96px",
          width: "96px",
          border: "5px solid",
          borderColor: `${determineCounterColor(status)}`,
          backgroundColor: "transparent",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h4" color="text.primary">{count}</Typography>
      </Avatar>
      <Typography  variant="h5" color="text.primary">{determineCounterLabel(status)}</Typography>
    </Box>
  );
};

export default TaskCounter;
