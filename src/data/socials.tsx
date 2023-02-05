import { FaPinterestP } from "react-icons/fa";
import { RiFacebookFill, RiInstagramLine, RiTwitterLine, RiYoutubeLine } from "react-icons/ri";

export type SocialType = {
    id: number;
    link: string;
    icon: JSX.Element;
};

export const socials: SocialType[] = [
    { id: 0, link: "#!", icon: <RiFacebookFill /> },
    { id: 1, link: "#!", icon: <RiInstagramLine /> },
    { id: 2, link: "#!", icon: <RiYoutubeLine /> },
    { id: 3, link: "#!", icon: <FaPinterestP /> },
];
