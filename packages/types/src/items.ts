import { Prettify } from "./utilities"

type ItemCommon = {
    itemName: string
    price: number
    season: boolean
    available?: boolean
}

type Drink = {
    type: "Drink"
    temp: "Hot" | "Iced"
} 

type Lemonade = {
    type: "Lemonade"
    temp: "Normal" | "Frozen"
}


type Latte = {
    type: "Latte"
    temp: "Hot" | "Iced"
    variant?: "Chai" | "Matcha" | string 
}

type Milkshake = {
    type: "Milkshake"
    variant: "Regular"
    flavour: "Vanilla" | "Chocolate"
} | {
    type: "Milkshake"
    variant: "Specialty"
    flavour: "Cookies & Cream" | "Chai" | "Matcha" | string
}

type AddOn = {
    type: "Add-on"
    variant: "Espresso" | "Oat Milk"
} | {
    type: "Add-on"
    variant: "Flavour"
    flavour: string
}

type Bagel = {
    type: "Food"
    variant: "Cinnamon Raisin" | "Everything" | "Plain" | "Blueberry" | "Sesame"
}

type ItemProps = ItemCommon & (Drink | Lemonade | Latte | Bagel | AddOn | Milkshake)

export type Item = Prettify<ItemProps>