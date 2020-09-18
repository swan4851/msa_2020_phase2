import React from "react";
import "./App.css";
import PostGrid from "./components/PostGrid_comp";
import AddPost from "./components/AddPost";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import LanguageMenu from "./components/LanguageMenu_comp";
import Divider from "@material-ui/core/Divider";
import { IUserInput } from "./common/Interface";
import LoginNav from "./components/LoginNav_comp";
import SocialShare from "./components/SocialShare";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    add: {
      textAlign: "center",
      paddingTop: theme.spacing(3),
    },
    share: {
      "& > *": {
        margin: theme.spacing(2),
      },
      textAlign: "center",
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    sharButtons: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    fab: {
      margin: theme.spacing(2),
    },
    page: {
      backgroundColor: "#B2DCF5",
    },
    absolute: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  })
);

function App() {
  const classes = useStyles();

  const [UserInput, setUserInput] = React.useState<IUserInput>({
    SearchQuery: "adventure",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }
  const isBackgroundRed = true;
  return (
    <div className={classes.page}>
      <LoginNav></LoginNav>
      <LanguageMenu></LanguageMenu>
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
      <Divider variant="middle" />
      <div className={classes.add}>
        <AddPost SetUserInput={(a: IUserInput) => SetUserInput(a)} />
      </div>
      <PostGrid SearchQuery={UserInput.SearchQuery} />

      <Divider />
      <div className={classes.share}>
        <SocialShare />
      </div>
    </div>
  );
}

export default App;
