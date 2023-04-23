import IUserData from "../userData";

export default interface IStore {
    userInfo: { userData: IUserData; };
}