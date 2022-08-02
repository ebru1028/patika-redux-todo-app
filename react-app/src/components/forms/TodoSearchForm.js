import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useDispatch } from 'react-redux';
import { searchTodo } from '../../redux/todos/todosSlice'

import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 350,
      background: "#fff",
    },
  },
}));
 
export default function TodoSearchForm() {
  const classes = useStyles();

  const [searchTitle, setsearchTitle] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(searchTodo(searchTitle));
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label="Search..."
        id="outlined-size-normal"
        variant="outlined"
        onChange={(e) => setsearchTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}
