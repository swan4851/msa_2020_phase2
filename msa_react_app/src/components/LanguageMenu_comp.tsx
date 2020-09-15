import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from "react-i18next";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  //   const translate = require("@vitalets/google-translate-api");

  //   translate("Hello world", { to: "es" }).then((res: any) => {
  //     console.log(res);
  //   });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: any) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Change Language
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("en")}>English</MenuItem>
        <MenuItem onClick={() => handleClose("ko")}>Korean</MenuItem>
        <MenuItem onClick={() => handleClose("chi")}>Chinese</MenuItem>
      </Menu>
      <p></p>
    </div>
  );
}
