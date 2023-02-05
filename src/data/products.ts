import {
    box1,
    box10,
    box11,
    box12,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8,
    box9,
    choc1,
    choc10,
    choc11,
    choc12,
    choc2,
    choc3,
    choc4,
    choc5,
    choc6,
    choc7,
    choc8,
    choc9,
} from "../assets/products";

export type ProductType = {
    id: number;
    name: string;
    price: number;
    sale: number;
    amount: number;
    tag?: string;
    image: string[];
};
export const products = [
    {
        id: 1,
        name: "Gift Box of 12 Truffles",
        price: 40,
        sale: 0,
        amount: 5,
        tag: "New",
        image: [box1, choc1],
    },
    {
        id: 2,
        name: "White Chocolate Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box2, choc2],
    },
    {
        id: 3,
        name: "White Chocolate & Nuts Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        tag: "Best seller",
        image: [box3, choc3],
    },
    {
        id: 4,
        name: "Milk Chocolate Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box4, choc4],
    },
    {
        id: 5,
        name: "Milk Chocolate & Coconut Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box5, choc5],
    },
    {
        id: 6,
        name: "Raspberry Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box6, choc6],
    },
    {
        id: 7,
        name: "Lavender Chocolate Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box7, choc7],
    },
    {
        id: 8,
        name: "Dark Chocolate Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box8, choc8],
    },
    {
        id: 9,
        name: "Peanut Butter Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box9, choc9],
    },
    {
        id: 10,
        name: "Pecan Pie Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box10, choc10],
    },
    {
        id: 11,
        name: "Apple Sauce Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box11, choc11],
    },
    {
        id: 12,
        name: "Mocha Brownie Truffles",
        price: 40,
        sale: 0,
        amount: 100,
        image: [box12, choc12],
    },
];