import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { IconButton, Icon } from "@material-ui/core";
import { useSnackbar } from "./useSnackbar";
import Alert from "@material-ui/lab/Alert";

import "./Snackbar.css"

const autoHideDuration = 5000;

export default function SimpleSnackbar() {
  const { snackbar, setSnackbar } = useSnackbar();

  const handleClose = () => {
    setSnackbar("", undefined);
  };

  const { message, type } = snackbar;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={!!message}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      className="Snackbar"
    >
      <Alert
        onClose={handleClose}
        severity={type}
        action={
          <IconButton
            key="close"
            color="inherit"
            onClick={(event) => {
              handleClose();
            }}
            size="small"
          >
            <Icon className="CloseIcon">close</Icon>
          </IconButton>
        }
        className="Alert"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
