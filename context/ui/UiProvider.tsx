import { FC, useReducer } from "react";
import { UiContext, uiReducer } from "./";

export interface UiState {
  isMenuOpen: boolean;
}

interface Props {
  children: React.ReactNode;
}

const UI_inicitialState: UiState = {
  isMenuOpen: false,
};

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_inicitialState);

  const toogleSideMenu = () => {
    dispatch({ type: "[UI] - ToogleMenu" });
  };
  return (
    <UiContext.Provider
      value={{
        ...state,
        toogleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
