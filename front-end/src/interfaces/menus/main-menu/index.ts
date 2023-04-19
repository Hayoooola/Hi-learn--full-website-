import ITopBarMenu from "../topbar-menu";

interface IMainMenu {
    title: string,
    href: string,
    submenus: ITopBarMenu[] | [];
}

export default IMainMenu;