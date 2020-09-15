import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard_comp";
import AddPost from "../components/AddPost";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(3, 3),
    },
    add: {
      textAlign: "center",
    },
  })
);

function PostGrid() {
  const [ItemArray, setItemArray] = useState<any[]>([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("https://dankblog.azurewebsites.net/api/Posts")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setItemArray(response);
      })
      .catch(() => console.log("it didn't work"));
  }, []);

  var Cards: JSX.Element[] = [];
  ItemArray.forEach((el: any, i: Number) => {
    //console.log(el);
    if (el === undefined) {
      return;
    } else {
      Cards.push(
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid key={"card_" + i} item xs={12}>
              <PostCard
                Alias={el["alias"]}
                Content={el["content"]}
                ID={el["id"]}
                Date={el["datePosted"]}
                Likes={el["likes"]}
                Dislikes={el["dislikes"]}
              />
            </Grid>
          </Grid>
        </div>
      );
      console.log(el["alias"]);
      console.log(el["content"]);
    }
  });

  // const [NewPostUP, setNewPost] = useState<string | null>("Default value");
  const Post = "Default value";

  return (
    <div className={classes.root}>
      <Grid>{Cards.reverse()}</Grid>
      <div className={classes.add}>
        <AddPost></AddPost>
      </div>
    </div>
  );

  // function refresh() => {
  //   // nblablblaba
  // }
}

export default PostGrid;
