import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddPost from "../components/AddPost";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      border: "1px solid #000",
      //maxWidth: 345,
    },
    media: {
      height: 140,
    },
    details: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(4, 4),
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(5, 20, 5),
      maxHeight: 500,
      overflow: "auto",
      width: "100%",
    },
    date: {
      paddingLeft: theme.spacing(2),
    },
  })
);

interface IMediaCardProps {
  Alias: string | undefined;
  Content: string | undefined;
  ID: Number | undefined;
  Date: string | undefined;
}

function PostCard(props: IMediaCardProps) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log(props.ID);

    fetch("https://dankblog.azurewebsites.net/api/Posts/" + props.ID, {
      method: "DELETE",
      // We convert the React state to JSON and send it as the POST body
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      console.log(response);
      return response.json();
    });

    // window.location.reload(false);
  };

  // function handleEdit() {
  //   console.log("Edit pressed");
  //   return <AddPost></AddPost>;
  // }

  // const handleEdit = () => {
  //   <AddPost handleAddOpen={handleClickOpen}></AddPost> // do stuff
  // }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardActionArea onClick={handleOpen}>
          {/* <CardMedia
            className={classes.media}
            //   image="/static/images/cards/contemplative-reptile.jpg"
            //   title="Contemplative Reptile"
          /> */}
          <CardContent className={classes.media}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.Alias}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.Content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider variant="middle" />
        <div className={classes.date}>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.Date?.split("T")[0]}
          </Typography>
        </div>
      </div>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.Alias}</h2>
            <p id="transition-modal-description">{props.Content}</p>
          </div>
        </Fade>
      </Modal>
    </Card>
  );
}

export default PostCard;

// function Component1(){

//   const [count, setCount] = React.useState(0);

//   const handleClose = () => {
//     setCount(count + 1);
//   };

//   return (count);

// }
// export default Component1;

// //======================================

// import Component1
// function Component2(){

//   const handleClick = () => {
//     <Component1 ></Component1>
//   };

//   return(
//     <Button onClick={handleClick}>
//       save
//     </Button>
//   );

// }
// export default Component2;
