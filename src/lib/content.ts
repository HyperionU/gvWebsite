import type { Item } from "./contentTypes";

const drinks: Item[] = 
[
    /* Drinks */
    {itemName: "Coffee", type: "Drink", price: 2.00, season: false, temp: "Hot"},
    {itemName: "Iced Coffee", type: "Drink", price: 2.00, season: false, temp: "Iced"},
    {itemName: "Tea", type: "Drink", price: 2.00, season: false, temp: "Hot"},
    {itemName: "Iced Tea", type: "Drink", price: 2.00, season: false, temp: "Iced"},
    {itemName: "Lemonade", type: "Lemonade", price: 2.00, season: false, temp: "Normal"},
    {itemName: "Frozen Lemonade", type: "Lemonade", price: 2.50, season: false, temp: "Frozen"},
    {itemName: "Refreshers", type: "Drink", price: 2.25, season: false, temp: "Iced"},
    {itemName: "Iced Brown Sugar Oat Shaken Espresso", type: "Drink", price: 4.25, season: false, temp: "Iced"},
    {itemName: "Hot Chocolate", type: "Drink", price: 3.75, season: false, temp: "Hot"},
    {itemName: "Peppermint Hot Chocolate", type: "Drink", price: 4.50, season: true, temp: "Hot"},
    {itemName: "London Fog", type: "Drink", price: 4.25, season: false, temp: "Hot"},
    {itemName: "Mocha", type: "Drink", price: 4.25, season: false, temp: "Hot"},
    {itemName: "Caramel Macchiato", type: "Drink", price: 4.25, season: false, temp: "Hot"}
]

const lattes: Item[] = 
[
    {itemName: "Latte", type: "Drink", price: 4.25, season: false, flag: "Latte", temp: "Hot"},
    {itemName: "Iced Latte", type: "Drink", price: 4.25, season: false, flag: "Latte", temp: "Iced"},
    {itemName: "Chai Latte", type: "Drink", price: 4.25, season: false, flag: "Latte", temp: "Hot", variant: "Chai"},
    {itemName: "Iced Chai Latte", type: "Drink", price: 4.25, season: false, flag: "Latte", temp: "Iced", variant: "Chai"},
    {itemName: "Matcha Latte", type: "Drink", price: 4.25, season: false, flag: "Latte", temp: "Hot", variant: "Matcha"},
    {itemName: "Iced Matcha Latte", type: "Drink", price: 4.25, season: false, flag: "Latte", temp: "Iced", variant: "Matcha"},
    {itemName: "Peppermint Latte", type: "Drink", price: 4.25, season: true, flag: "Latte", temp: "Hot", variant: "Peppermint"},
    {itemName: "Iced Peppermint Latte", type: "Drink", price: 4.25, season: true, flag: "Latte", temp: "Iced", variant: "Peppermint"},
]

const milkshakes: Item[] = 
[
    {itemName: "Vanilla Milkshake", type: "Milkshake", price: 4.25, season: false, variant: "Regular", flavour: "Vanilla"},
    {itemName: "Chocolate Milkshake", type: "Milkshake", price: 4.25, season: false, variant: "Regular", flavour: "Chocolate"},
    {itemName: "Cookies and Cream Milkshake", type: "Milkshake", price: 4.75, season: false, variant: "Specialty", flavour: "Cookies & Cream"},
    {itemName: "Chai Milkshake", type: "Milkshake", price: 4.75, season: false, variant: "Specialty", flavour: "Chai"},
    {itemName: "Matcha Milkshake", type: "Milkshake", price: 4.75, season: false, variant: "Specialty", flavour: "Matcha"},
    {itemName: "Peppermint Milkshake", type: "Milkshake", price: 4.75, season: true, variant: "Specialty", flavour: "Peppermint"},
]

const bagels: Item[] = 
[
    {itemName: "Bagel", type: "Food", price: 2.00, season: false, variant: "Cinnamon Raisin"},
    {itemName: "Bagel", type: "Food", price: 2.00, season: false, variant: "Blueberry"},
    {itemName: "Bagel", type: "Food", price: 2.00, season: false, variant: "Everything"},
    {itemName: "Bagel", type: "Food", price: 2.00, season: false, variant: "Plain"},
    {itemName: "Bagel", type: "Food", price: 2.00, season: false, variant: "Sesame"},
]

const addOn: Item[] = 
[
    {itemName: "+ Espresso Shot", type: "Add-on", price: 0.50, season: false, variant: "Espresso"},
    {itemName: "+ Oat Milk", type: "Add-on", price: 1.00, season: false, variant: "Oat Milk"},
]

const flavourShots: Item[] = 
[
    {itemName: "+ Vanilla", type: "Add-on", price: 0.25, season: false, variant: "Flavour", flavour: "Vanilla"},
    {itemName: "+ Caramel", type: "Add-on", price: 0.25, season: false, variant: "Flavour", flavour: "Caramel"},
    {itemName: "+ Mango", type: "Add-on", price: 0.25, season: false, variant: "Flavour", flavour: "Mango"},
    {itemName: "+ Lavender", type: "Add-on", price: 0.25, season: true, variant: "Flavour", flavour: "Lavender"},
    {itemName: "+ Peppermint", type: "Add-on", price: 0.25, season: true, variant: "Flavour", flavour: "Peppermint"},
]

export {milkshakes, drinks, lattes, addOn, bagels, flavourShots}