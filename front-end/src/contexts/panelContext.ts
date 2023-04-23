import { createContext } from "react";
import IUserData from "../interfaces/userData";

interface IProps {
    userObj: IUserData | null;
}

const PanelContext = createContext<IProps>({
    userObj: null
});


export const PanelContextProvider = PanelContext.Provider;
export default PanelContext;