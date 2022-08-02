import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import TodoSearchForm from "./forms/TodoSearchForm";

const useStyles = makeStyles({
    root: {
        width: '100%',
        color: "grey",
        textAlign: "center",
        marginTop: "60px"
    },
});

function Header() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h2" gutterBottom>
                NotesApp
            </Typography>
            <TodoSearchForm/>
        </div>
    )
}

export default Header
