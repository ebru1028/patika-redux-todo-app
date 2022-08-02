import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

import { addTodo } from '../../redux/todos/todosSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const YellowRadio = withStyles({
    root: {
        color: yellow[400],
        '&$checked': {
            color: yellow[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
    root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
        marginTop: "30px",
        margin: "0 auto",
        maxWidth: "650px",
        width: "100%",

    },
    subForm: {
        maxWidth: "650px",
        width: "100%",
        display: "flex",
        backgroundColor: "white",
        marginTop: "-20px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 0px",
    },
    palette: {
        backgroundColor: "#44a047",
        color: "white",
        fontWeight: "bold",
    },
}));

export default function TodoAddForm() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const dispatch = useDispatch();

    const [selectedValue, setSelectedValue] = React.useState();
    const [title,setTitle]= useState('');
    const [color, setColor]= useState('');

    const handleChange = (event) => {

        setSelectedValue(event.target.value);

        if(event.target.value==="a"){
            setColor("red-note");
        }
        else if(event.target.value==="b"){
            setColor("yellow-note");
        }
        else if(event.target.value==="c"){
            setColor("green-note");
          }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({id:nanoid(),title,color}));
    };

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Enter your note here..."
                defaultValue=""
                onChange={(e)=>setTitle(e.target.value)}
                style={{ maxWidth: "650px", width: "100%", height: 200, border: "none" }} />

            <div className={classes.subForm}>
                <div>
                    <RedRadio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <GreenRadio
                        checked={selectedValue === 'c'}
                        onChange={handleChange}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'C' }}
                    />
                    <YellowRadio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" className={classes.palette} type="submit">
                        ADD
                    </Button>
                </div>
            </div>
        </form>
    );
}
