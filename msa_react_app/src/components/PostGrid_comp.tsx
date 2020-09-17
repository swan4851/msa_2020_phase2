import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard_comp";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { IUserInput } from "../common/Interface";
import LoginNav from "../components/LoginNav_comp";

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

function PostGrid(props: any) {
  const [ItemArray, setItemArray] = useState<any[]>([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("https://dankblog.azurewebsites.net/api/Posts")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setItemArray(response);
        console.log("why not work then?");
      })
      .catch(() => console.log("it didn't work"));
  }, [props.SearchQuery]);

  var Cards: JSX.Element[] = [];
  ItemArray.forEach((el: any, i: Number) => {
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
    }
  });

  return (
    <div className={classes.root}>
      <Grid>{Cards.reverse()}</Grid>
    </div>
  );
}

export default PostGrid;
