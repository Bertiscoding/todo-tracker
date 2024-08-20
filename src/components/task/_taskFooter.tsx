import React, { FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import { Status } from '../createTaskForm/enums/Status';

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onStatusChange=(e) => console.log(e),
    onClick=(e) => console.log(e)
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            defaultChecked={status === Status.inProgress}
            color="warning"
            onClick={(e) => onClick(e, id)}
            onChange={(e) => onStatusChange(e, id)}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{color: "#ffffff"}}
        onClick={(e) => onClick(e, id)}
      >
        Mark as completed
      </Button>
    </Box>
  );
};

export default TaskFooter;
