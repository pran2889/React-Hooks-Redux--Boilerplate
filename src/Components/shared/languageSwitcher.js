import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import i18nFile from "../../i18next";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const LanguageSwitcher = () => {
  const classes = useStyles(0);
  const { i18n } = useTranslation();
  onlanguagechange = (langauge) => {
    //here whole app language is changed
    console.log(langauge)
    i18n.changeLanguage(langauge);
  };


  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">
        {i18nFile.t("navbar:languagelbl")}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={i18n.language}
        onChange={(e) => onlanguagechange(e.target.value)}
      >
        <MenuItem value={"en"}>English</MenuItem>
        <MenuItem value={"fr"}>French</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
