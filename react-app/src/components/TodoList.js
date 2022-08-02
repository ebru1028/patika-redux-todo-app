import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todos/todosSlice'

const useStyles = makeStyles((theme) => ({
    cards: {
        display: "flex",
        justifyContent: "space-around",
        maxWidth: "650px",
        width: "100%",
        margin: "15px auto",
        [theme.breakpoints.down('md')]: {
            display: "block",
        },
    },
    bgCrimson: {
        backgroundColor: "#e53934",
    },
    bgGreen: {
        backgroundColor: "mediumseagreen",
    },
    bgYellow: {
        backgroundColor: "#efce45",
    },
    card: {
        minWidth: 200,
        maxWidth: "33.33%",
        margin: "0px 5px",
        [theme.breakpoints.down('md')]: {
            maxWidth: "100%",
            margin: "10px 0px",
        },
    },
    title: {
        fontSize: 12,
        color: "white",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function TodoList() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const dispatch = useDispatch();

    const items = useSelector(state => state.todos.items);
    
    const redNotes = items.filter(item => {
        return item.color === 'red-note';
    });

    const greenNotes = items.filter(item => {
        return item.color === 'green-note';
    });

    const yellowNotes = items.filter(item => {
        return item.color === 'yellow-note';
    });

    return (
     
        <div className={classes.cards}>

            <Card className={`${classes.card} ${classes.bgCrimson}`}>
                <CardContent>
                    <Typography variant="h6" component="h3">
                        Red Notes
                    </Typography>

                    {
                        redNotes.length > 0 &&                    
                        redNotes.map((item, index) => (
                            <>
                                <Typography key={index} className={classes.title}>
                                    {item.title}
                                    <IconButton onClick={() => dispatch(deleteTodo(item.id))} fontSize="small" aria-label="delete">
                                        <CloseIcon style={{ color: "white", fontSize: "12" }} fontSize="small" />
                                    </IconButton>
                                </Typography>
                            </>

                        ))
                    }

                </CardContent>
            </Card>

            <Card className={`${classes.card} ${classes.bgGreen}`}>
                <CardContent>
                    <Typography variant="h6" component="h3">
                        Green Notes
                    </Typography>
                    {
                        greenNotes.length > 0 &&

                        greenNotes.map((item, index) => (
                            <>
                                <Typography key={index} className={classes.title}>
                                    {item.title}
                                    <IconButton onClick={() => dispatch(deleteTodo(item.id))} aria-label="delete">
                                        <CloseIcon style={{ color: "white", fontSize: "12" }} fontSize="small" />
                                    </IconButton>
                                </Typography>
                            </>

                        ))
                    }

                </CardContent>
            </Card>

            <Card className={`${classes.card} ${classes.bgYellow}`}>
                <CardContent>
                    <Typography variant="h6" component="h3">
                        Yellow Notes
                    </Typography>
                    {
                        yellowNotes.length > 0 &&

                        yellowNotes.map((item, index) => (
                            <>
                                <Typography key={index} className={classes.title} color="textSecondary">
                                    {item.title}
                                    <IconButton onClick={() => dispatch(deleteTodo(item.id))} aria-label="delete">
                                        <CloseIcon style={{ color: "white", fontSize: "12" }} fontSize="small" />
                                    </IconButton>
                                </Typography>
                            </>
                        ))
                    }

                </CardContent>
            </Card>

        </div>
    )
}
