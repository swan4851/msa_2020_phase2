import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { useTranslation } from "react-i18next";
import "./I18n";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    dialogue: {
      padding: theme.spacing(3, 3),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3, 3),
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// interface AddNewPost {
//   NewPost: string | null;
// }

export default function AddPost() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewPost("");
    setNewPostTitle("");
  };

  const [textLim, setTextLim] = React.useState(false);

  const handleTextOpen = () => {
    setTextLim(true);
  };

  const handleTextClose = () => {
    setTextLim(false);
  };

  const [NewPostUPTitle, setNewPostTitle] = useState<string | null>("");
  const [NewPostUP, setNewPost] = useState<string | null>("");
  const handleNewPost = (s: string | null) => {
    setNewPost(s);
  };
  const handleNewPostTitle = (s: string | null) => {
    setNewPostTitle(s);
  };

  const [HasFocus, setHasFocus] = useState<boolean>(false);

  const [postId, setPostId] = useState(null);

  const handleSubmit = () => {
    console.log(NewPostUP?.length);
    if (
      NewPostUP?.length !== 0 &&
      NewPostUP !== null &&
      NewPostUP !== "" &&
      NewPostUPTitle?.length !== 0 &&
      NewPostUPTitle !== null &&
      NewPostUPTitle !== ""
    ) {
      console.log(NewPostUP);
      console.log(NewPostUPTitle);

      var postDate = new Date();
      // console.log(new Date().toLocaleString());
      fetch("https://dankblog.azurewebsites.net/api/Posts", {
        method: "POST",
        // We convert the React state to JSON and send it as the POST body
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 0,
          content: NewPostUP,
          alias: NewPostUPTitle,
          datePosted: postDate.toISOString(),
          likes: 0,
          dislikes: 0,
        }),
      }).then(function (response) {
        console.log(response);
        return response.json();
      });

      handleClose();
      // window.location.reload(false);

      // props.NewPost = NewPostUP;
    } else {
      setHasFocus(true);
    }
  };

  const { t, i18n } = useTranslation();

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {t("AddPost")}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              {t("Save")}
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.dialogue}>
          <div className={classes.content}>
            <TextField
              id="outlined-basic"
              label={t("Title")}
              variant="outlined"
              value={NewPostUPTitle}
              onChange={(e) => handleNewPostTitle(e.target.value)}
            />
          </div>
          <div className={classes.content}>
            <TextField
              id="outlined-multiline-static"
              label={t("Content")}
              multiline
              fullWidth
              rows={10}
              variant="outlined"
              //onClick={() => setHasFocus(true)}
              value={NewPostUP}
              onChange={(e) => handleNewPost(e.target.value)}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
