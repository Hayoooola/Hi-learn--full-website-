interface IUserData {
    email: string,
    name: string,
    role: "USER" | "ADMIN",
    username: string,
    _id: string;
}

export default IUserData;