import { useContext } from "react";
import { SnackbarSetContext, SnackbarValueContext } from "./SnackbarContext";

const useSetSnackbar = () => {
  const setSnackbar = useContext(SnackbarSetContext);
  return setSnackbar;
};

const useGetSnackbar = () => {
  const snackbar = useContext(SnackbarValueContext);
  return snackbar;
};

const useSnackbar = () => {
  const setSnackbar = useContext(SnackbarSetContext);
  const snackbar = useContext(SnackbarValueContext);

  return {
    setSnackbar,
    snackbar,
  };
};

export { useSetSnackbar, useGetSnackbar, useSnackbar };
