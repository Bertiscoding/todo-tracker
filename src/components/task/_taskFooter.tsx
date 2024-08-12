import React, { FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
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
            color="warning"
            onClick={(e) => onClick(e)}
            onChange={(e) => onStatusChange(e)}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{color: "#ffffff"}}
        onClick={(e) => onClick(e)}
      >
        Mark as completed
      </Button>
    </Box>
  );
};

export default TaskFooter;
