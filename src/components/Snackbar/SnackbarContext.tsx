import React, { createContext, useState, memo } from "react";

export type MessageType = "success" | "info" | "warning" | "error" | undefined;

interface SnackbarMessage {
  message: string;
  type: MessageType;
}

interface SnackbarProviderProps {
  setSnackbar: ({ message, type }: SnackbarMessage) => void;
  children: React.ReactNode;
}

interface SnackbarContainerProps {
  children: React.ReactNode;
}

export const SnackbarValueContext = createContext<SnackbarMessage>({
  message: "",
  type: undefined,
});

export const SnackbarSetContext = createContext(
  (message: string, type: MessageType) => {}
);

const SnackbarProvider = memo(
  ({ setSnackbar, children }: SnackbarProviderProps) => {
    const handleSnackbarSet = (message: string, type: MessageType) => {
      setSnackbar({ message, type });
    };

    return (
      <SnackbarSetContext.Provider value={handleSnackbarSet}>
        {children}
      </SnackbarSetContext.Provider>
    );
  }
);

export const SnackbarContainer = ({ children }: SnackbarContainerProps) => {
  const [snackbar, setSnackbar] = useState<SnackbarMessage>({
    message: "",
    type: "success",
  });

  return (
    <SnackbarValueContext.Provider value={snackbar}>
      <SnackbarProvider setSnackbar={setSnackbar}>{children}</SnackbarProvider>
    </SnackbarValueContext.Provider>
  );
};
