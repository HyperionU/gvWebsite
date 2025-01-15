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
    {itemName: "Peppermint Hot Chocolate", type: "Drink", price: 4.50, season: true, temp: "Hot", available: true},
    {itemName: "London Fog", type: "Drink", price: 4.25, season: false, temp: "Hot"},
    {itemName: "Mocha", type: "Drink", price: 4.25, season: false, temp: "Hot"},
    {itemName: "Caramel Macchiato", type: "Drink", price: 4.25, season: false, temp: "Hot"}
]

const lattes: Item[] = 
[
    {itemName: "Latte", type: "Latte", price: 4.25, season: false, temp: "Hot"},
    {itemName: "Iced Latte", type: "Latte", price: 4.25, season: false, temp: "Iced"},
    {itemName: "Chai Latte", type: "Latte", price: 4.25, season: false, temp: "Hot", variant: "Chai"},
    {itemName: "Iced Chai Latte", type: "Latte", price: 4.25, season: false, temp: "Iced", variant: "Chai"},
    {itemName: "Matcha Latte", type: "Latte", price: 4.25, season: false, temp: "Hot", variant: "Matcha"},
    {itemName: "Iced Matcha Latte", type: "Latte", price: 4.25, season: false, temp: "Iced", variant: "Matcha"},
    {itemName: "Peppermint Latte", type: "Latte", price: 4.25, season: true, temp: "Hot", variant: "Peppermint", available: true},
    {itemName: "Iced Peppermint Latte", type: "Latte", price: 4.25, season: true, temp: "Iced", variant: "Peppermint", available: true},
]

const milkshakes: Item[] = 
[
    {itemName: "Vanilla Milkshake", type: "Milkshake", price: 4.25, season: false, variant: "Regular", flavour: "Vanilla"},
    {itemName: "Chocolate Milkshake", type: "Milkshake", price: 4.25, season: false, variant: "Regular", flavour: "Chocolate"},
    {itemName: "Cookies and Cream Milkshake", type: "Milkshake", price: 4.75, season: false, variant: "Specialty", flavour: "Cookies & Cream"},
    {itemName: "Chai Milkshake", type: "Milkshake", price: 4.75, season: false, variant: "Specialty", flavour: "Chai"},
    {itemName: "Matcha Milkshake", type: "Milkshake", price: 4.75, season: false, variant: "Specialty", flavour: "Matcha"},
    {itemName: "Peppermint Milkshake", type: "Milkshake", price: 4.75, season: true, variant: "Specialty", flavour: "Peppermint", available: true},
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
    {itemName: "+ Lavender", type: "Add-on", price: 0.25, season: true, variant: "Flavour", flavour: "Lavender", available: false},
    {itemName: "+ Peppermint", type: "Add-on", price: 0.25, season: true, variant: "Flavour", flavour: "Peppermint", available: true},
]

export {milkshakes, drinks, lattes, addOn, bagels, flavourShots}