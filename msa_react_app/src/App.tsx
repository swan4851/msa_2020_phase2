import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostCard from "./components/PostCard_comp";
import PostGrid from "./components/PostGrid_comp";
import AddPost from "./components/AddPost";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    add: {
      textAlign: "center",
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.add}>
        <Typography
          color="textSecondary"
          variant="h1"
          component="h2"
          gutterBottom
        >
          WangBlogs
        </Typography>
      </div>
      <PostGrid />
    </div>
  );
}

export default App;
