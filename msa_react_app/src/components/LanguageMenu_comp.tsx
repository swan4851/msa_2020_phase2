import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from "react-i18next";
import "./I18n";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => i18n.changeLanguage(language);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [CurLan, setCurLan] = React.useState<string | null>("");

  const handleClose = (lang: any) => {
    setCurLan(lang);
    changeLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Language: {t("Curr")}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose(CurLan)}
      >
        <MenuItem onClick={() => handleClose("en")}>English</MenuItem>
        <MenuItem onClick={() => handleClose("es")}>Spanish</MenuItem>
        <MenuItem onClick={() => handleClose("chi")}>Chinese</MenuItem>
        <MenuItem onClick={() => handleClose("ko")}>Korean</MenuItem>
      </Menu>
      <p></p>
    </div>
  );
}
