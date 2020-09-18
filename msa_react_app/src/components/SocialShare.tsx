import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
} from "react-share";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sharButtons: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    share: {
      "& > *": {
        margin: theme.spacing(2),
      },
      textAlign: "center",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(6),
    },
  })
);

export default function SocialShare() {
  const classes = useStyles();

  return (
    <div>
      <Typography color="textSecondary" variant="h6" gutterBottom>
        Social Media Share
      </Typography>
      <div className={classes.share}>
        <EmailShareButton url={"https://wangblogs.azurewebsites.net/"}>
          <Avatar className={classes.sharButtons}>
            <EmailIcon />
          </Avatar>
        </EmailShareButton>
        <FacebookShareButton url={"https://wangblogs.azurewebsites.net/"}>
          <Avatar className={classes.sharButtons}>
            {" "}
            <FacebookIcon />
          </Avatar>
        </FacebookShareButton>
        <InstapaperShareButton url={"https://wangblogs.azurewebsites.net/"}>
          <Avatar className={classes.sharButtons}>
            <InstapaperIcon />
          </Avatar>
        </InstapaperShareButton>
        <LineShareButton url={"https://wangblogs.azurewebsites.net/"}>
          <Avatar className={classes.sharButtons}>
            <LineIcon />
          </Avatar>
        </LineShareButton>
        <LinkedinShareButton url={"https://wangblogs.azurewebsites.net/"}>
          <Avatar className={classes.sharButtons}>
            <LinkedinIcon />
          </Avatar>
        </LinkedinShareButton>
      </div>

      <Typography
        color="textSecondary"
        variant="overline"
        component="h1"
        gutterBottom
      >
        WangBlogs 2020
      </Typography>
    </div>
  );
}
