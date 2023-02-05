export type NavType = {
    id: number;
    display: string;
    path: string;
};

export const navbars: NavType[] = [
    {
        id: 0,
        display: "Home",
        path: "/",
    },
    {
        id: 1,
        display: "Shop",
        path: "/shop",
    },
    {
        id: 2,
        display: "About",
        path: "/about",
    },
    {
        id: 3,
        display: "Contact",
        path: "#contact",
    },
];
