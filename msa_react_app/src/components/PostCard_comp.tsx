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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      //maxWidth: 345,
    },
    media: {
      height: 140,
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

interface IMediaCardProps {
  Alias: string | undefined;
  Content: string | undefined;
}

function PostCard(props: IMediaCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardActionArea>
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
      </div>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;
